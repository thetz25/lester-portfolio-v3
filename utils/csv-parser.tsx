export interface PortfolioItem {
  slug: string
  title: string
  logo: string
  mainImage: string
  shortDescription: string
  projectUrl: string
  content: string
  sortOrder: string
  categories?: string[] // We'll add this for filtering
}

// Add a check for client-side environment at the top of the fetchPortfolioData function

export async function fetchPortfolioData(): Promise<PortfolioItem[]> {
  // Use a cache to avoid refetching the data multiple times
  if (typeof window !== "undefined" && (window as any).__portfolioCache) {
    return (window as any).__portfolioCache
  }

  try {
    // Use local sample file as primary s ce for template
    const response = await fetch("/data/portfolio-sample.csv", {
      // Add cache: 'no-store' for server components to always fetch fresh data
      cache: typeof window === "undefined" ? "no-store" : "default",
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch portfolio CSV: ${response.status}`)
    }

    const csvText = await response.text()
    const parsedData = parseCSV(csvText)

    // Cache the data on the client side
    if (typeof window !== "undefined") {
      ; (window as any).__portfolioCache = parsedData
    }

    return parsedData
  } catch (error) {
    console.error("Error fetching portfolio data:", error)
    // Return fallback sample data if CSV fails to load
    return getFallbackPortfolioData()
  }
}

// Fallback data in case CSV file fails to load
function getFallbackPortfolioData(): PortfolioItem[] {
  return [
    {
      slug: "sagot-bot",
      title: "SagotBot",
      logo: "/sagotbot-logo.jpg",
      mainImage: "/portfolio-images/sagotbot-main.png",
      shortDescription: "Automated Customer Support Chatbot",
      projectUrl: "https://example.com",
      content: `<h4>Problem</h4><p>Business received high volumes of messages requiring instant, context-aware responses 24/7, but manual replies were slow and inconsistent.</p><h4>Solution</h4><p>Built an n8n workflow using webhooks to receive messages, filter and retrieve relevant documents, then respond using AI with persistent memory for contextual conversations.</p><h4>Result</h4><p>Achieved 90% automated response rate with human-like conversations, reducing response time from hours to seconds.</p>`,
      sortOrder: "2024-01-15",
      categories: ["all", "ai", "customer support"],
    },
    {
      slug: "data-processing-pipeline",
      title: "Data Processing Pipeline",
      logo: "/logo.jpg",
      mainImage: "/portfolio-images/data-pipeline-main.png",
      shortDescription: "Manual data entry and processing was time-consuming and error-prone",
      projectUrl: "https://example.com",
      content: `<h4>Problem</h4><p>Manual data entry and processing was time-consuming and error-prone, leading to delays in business operations.</p><h4>Solution</h4><p>Developed an n8n automation that processes, validates, and routes data automatically across multiple platforms.</p><h4>Result</h4><p>Increased data processing speed by 85% while reducing errors to near zero.</p>`,
      sortOrder: "2024-01-10",
      categories: ["all", "automation", "data"],
    },
    {
      slug: "web-app-development",
      title: "Web App Development",
      logo: "/logo.jpg",
      mainImage: "/portfolio-images/webapp-dev-main.png",
      shortDescription: "Client needed custom internal tools to manage their workflow",
      projectUrl: "https://example.com",
      content: `<h4>Problem</h4><p>Client needed custom internal tools to manage their workflow but off-the-shelf solutions didn't fit their needs.</p><h4>Solution</h4><p>Built a custom web application with user authentication, data management, and automated workflows.</p><h4>Result</h4><p>Streamlined operations and saved 20+ hours per week in manual tasks.</p>`,
      sortOrder: "2024-01-05",
      categories: ["all", "web", "automation"],
    },
    {
      slug: "website-creation",
      title: "Website Creation",
      logo: "/logo.jpg",
      mainImage: "/portfolio-images/website-cleaning-main.png",
      shortDescription: "Client needed a professional online presence but lacked technical expertise",
      projectUrl: "https://example.com",
      content: `<h4>Problem</h4><p>Client needed a professional online presence but lacked technical expertise to build and maintain a website.</p><h4>Solution</h4><p>Designed and developed a clean, modern, and responsive website tailored to the client's brand and business goals.</p><h4>Result</h4><p>Delivered a fully functional website ready for launch, improving client's online visibility and credibility.</p>`,
      sortOrder: "2023-12-20",
      categories: ["all", "web", "design"],
    },
  ]
}

function parseCSV(csvText: string): PortfolioItem[] {
  // Split the CSV into lines
  const lines = csvText.split("\n")

  // Extract headers (first line)
  const headers = lines[0].split(",").map((header) => header.trim().replace(/^"/, "").replace(/"$/, ""))

  // Map CSV columns to our interface properties
  const columnMap: Record<string, keyof PortfolioItem> = {
    Slug: "slug",
    Title: "title",
    Logo: "logo",
    "Main Image": "mainImage",
    "Short Description": "shortDescription",
    "Project URL": "projectUrl",
    Content: "content",
    "Sort Order": "sortOrder",
  }

  // Parse the data rows
  const items: PortfolioItem[] = []

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue // Skip empty lines

    // Handle CSV values that might contain commas within quotes
    const values: string[] = []
    let currentValue = ""
    let insideQuotes = false

    for (let j = 0; j < lines[i].length; j++) {
      const char = lines[i][j]

      if (char === '"') {
        insideQuotes = !insideQuotes
      } else if (char === "," && !insideQuotes) {
        values.push(currentValue.trim().replace(/^"/, "").replace(/"$/, ""))
        currentValue = ""
      } else {
        currentValue += char
      }
    }

    // Add the last value
    values.push(currentValue.trim().replace(/^"/, "").replace(/"$/, ""))

    // Create the portfolio item
    const item: Partial<PortfolioItem> = {}

    // Map values to properties
    headers.forEach((header, index) => {
      const key = columnMap[header]
      if (key && index < values.length) {
        item[key] = values[index]
      }
    })

    // Add categories based on content or title for filtering
    item.categories = inferCategories(item as PortfolioItem)

    items.push(item as PortfolioItem)
  }

  // Sort by sortOrder
  return items.sort((a, b) => {
    return new Date(b.sortOrder).getTime() - new Date(a.sortOrder).getTime()
  })
}

function inferCategories(item: PortfolioItem): string[] {
  const categories: string[] = ["all"]

  // Add categories based on content keywords
  const contentLower = (item.content || "").toLowerCase()
  const titleLower = (item.title || "").toLowerCase()
  const descriptionLower = (item.shortDescription || "").toLowerCase()

  if (
    contentLower.includes("web3") ||
    contentLower.includes("blockchain") ||
    titleLower.includes("web3") ||
    descriptionLower.includes("web3") ||
    contentLower.includes("crypto") ||
    titleLower.includes("crypto") ||
    titleLower.includes("blockchain")
  ) {
    categories.push("web3")
  }

  if (
    contentLower.includes("bubble") ||
    contentLower.includes("no-code") ||
    contentLower.includes("nocode") ||
    contentLower.includes("no code")
  ) {
    categories.push("bubble")
  }

  if (
    contentLower.includes("ai") ||
    contentLower.includes("artificial intelligence") ||
    titleLower.includes("ai") ||
    descriptionLower.includes("ai") ||
    titleLower.includes("content") ||
    descriptionLower.includes("ai-powered")
  ) {
    categories.push("ai")
  }

  if (
    contentLower.includes("mobile") ||
    contentLower.includes("ios") ||
    contentLower.includes("android") ||
    titleLower.includes("app")
  ) {
    categories.push("mobile")
  }

  if (
    contentLower.includes("design") ||
    contentLower.includes("ui") ||
    contentLower.includes("ux") ||
    contentLower.includes("interface")
  ) {
    categories.push("design")
  }

  // Default to "web" if no specific category is found
  if (categories.length === 1) {
    categories.push("web")
  }

  return categories
}
