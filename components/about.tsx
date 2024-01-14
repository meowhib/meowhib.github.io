import NewsletterForm from "./newsletter";

export default function About() {
  return (
    <div className="space-y-12" id="about">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">About me</h1>
        <p className="text-lg">
          A full stack web developer based in Tunisia. I have been designing and
          developing websites for the last 5 years where I delivered
          professional websites of all kinds.
        </p>
        <p className="text-xl">
          I am on the journey to find the balance of travelling and working.
        </p>
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Join my newsletter</h1>
        <p className="text-lg">
          I share insights, thoughts and new discoveries every week through my
          newsletter
        </p>
        <NewsletterForm />
      </div>
    </div>
  );
}
