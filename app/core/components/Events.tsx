import { ChevronRightIcon, CalendarIcon, LocationMarkerIcon } from "@heroicons/react/solid"
import getEvents from "app/events/queries/getEvents"
import { useQuery } from "@blitzjs/rpc"
import { Routes } from "@blitzjs/next"
import Link from "next/link"

export default function Events() {
  const [events] = useQuery(getEvents, null)

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {events.map((event) => (
          <li key={event.id}>
            <Link href={Routes.Event({ event: event.id, talk: event.talk.id })}>
              <a className="block hover:bg-gray-50">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0" />
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-indigo-600 flex-wrap">
                          {event.talk.name}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <CalendarIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <time dateTime={event.date.toString()}>{event.date.toDateString()}</time>
                        </p>
                      </div>
                      <div className="md:block">
                        <div>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <LocationMarkerIcon
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            {event.name} · {event.place}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
