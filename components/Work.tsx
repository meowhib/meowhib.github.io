export default function Work() {
  return (
    <div className="mx-auto max-w-7xl p-6 space-y-20 mt-24">
      <h1 className="text-4xl font-bold text-center">My latest work</h1>
      <div className="flex flex-col space-y-24">
        <div className="grid grid-cols-8 gap-x-6">
          <div className="col-span-3 py-6 space-y-4">
            <h1 className="text-2xl font-bold">BagageVoyage</h1>
            <p className="text-lg">
              A project in collaboration with x where they are responsive for
              the marketing of the website and bringing users in.
            </p>
            <p className="text-lg">
              The platform give independent transporters the ability to post
              their services and get potential clients.
            </p>
            <p className="text-lg">
              This is also a place for people to find these kinds of services to
              have their items shipped to other countries for cheaper than what
              they can find else where.
            </p>
            <p className="text-lg">I was responsive for:</p>
            <ul className="list-disc list-inside">
              <li>Design</li>
              <li>Development (Frontend and backend)</li>
              <li>Hosting and monitoring</li>
            </ul>
            <p className="text-lg">
              👇 click here to check the website yourself
            </p>
          </div>
          <div className="col-span-5 w-full aspect-square grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gray-200 col-span-2"></div>
            <div className="rounded-lg bg-gray-200 "></div>
            <div className="rounded-lg bg-gray-200 "></div>
          </div>
        </div>

        <div className="grid grid-cols-8 gap-x-6">
          <div className="col-span-3 py-6 space-y-4">
            <h1 className="text-2xl font-bold">Eatourist</h1>
            <p className="text-lg">
              A side project of a web application that helps restaurants bring
              in more clients in touristic places, digitize their menus and take
              orders and payments right from the web application.
            </p>
            <p className="text-lg">
              Eatourist also offers restaurant owners the management of
              different restaurants of having managers for each restaurant and
              see advanced analytics like the number of visitors, number of
              orders and revenue that came from the app.
            </p>
            <p className="text-lg">
              👇 click here to check the website yourself
            </p>
          </div>
          <div className="col-span-5 w-full aspect-square grid grid-cols-6 gap-4">
            <div className="rounded-lg bg-gray-200 col-span-3"></div>
            <div className="rounded-lg bg-gray-200 col-span-3"></div>
            <div className="rounded-lg bg-gray-200 col-span-2"></div>
            <div className="rounded-lg bg-gray-200 col-span-2"></div>
            <div className="rounded-lg bg-gray-200 col-span-2"></div>
          </div>
        </div>

        <div className="grid grid-cols-8 gap-x-6">
          <div className="col-span-3 py-6 space-y-4">
            <h1 className="text-2xl font-bold">Udefin</h1>
            <p className="text-lg">
              A side project of a web application that helps students learn
              through their downloaded materials like YouTube playlists or
              downloaded courses.
            </p>
            <p className="text-lg">
              Udefin acts like streaming service that streams courses to
              students, keep track of where they left off and an overview of the
              courses{" "}
            </p>
            <p className="text-lg">
              👇 click here to check the website yourself
            </p>
          </div>
          <div className="col-span-5 w-full aspect-square grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gray-200 col-span-2"></div>
            <div className="rounded-lg bg-gray-200 "></div>
            <div className="rounded-lg bg-gray-200 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
