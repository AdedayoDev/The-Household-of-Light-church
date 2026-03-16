export type Message = {
  title: string
  link: string
  image: string
  duration: string
  date: string
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1528630883280-6d8bbc9f0f1c?auto=format&fit=crop&w=1200&q=80"

const MEGA_LINK =
  "https://mega.nz/folder/uwBSQTQA#bIygYqrOOa0qDvx1vuL29A"

const baseTitles = [
  "A Charge on Persuasion",
  "Living in the Overflow",
  "Freedom in Christ",
  "The Power of Prayer",
  "Walking in Wisdom",
  "Standing Firm in Faith",
  "The Heart of Worship",
  "Called to Courage",
  "Faith that Moves Mountains",
  "Renewed in His Purpose",
]

const baseDates = [
  "Jan 12, 2025",
  "Feb 18, 2025",
  "Mar 05, 2025",
  "Apr 22, 2025",
  "May 09, 2025",
  "Jun 16, 2025",
  "Jul 04, 2025",
  "Aug 21, 2025",
  "Sep 12, 2025",
  "Oct 30, 2025",
]

export const messages: Message[] = Array.from({ length: 320 }, (_, index) => {
  const title = baseTitles[index % baseTitles.length]
  const suffix = index === 0 ? "" : ` (${index + 1})`
  const duration = `${40 + (index % 20)} mins`
  const date = baseDates[index % baseDates.length]

  return {
    title: `${title}${suffix}`,
    link: MEGA_LINK,
    image: DEFAULT_IMAGE,
    duration,
    date,
  }
})
