import db from "db"

export default async function getEvents(_ = null) {
  const events = await db.event.findMany({
    include: {
      talk: true,
    },
  })

  return events
}
