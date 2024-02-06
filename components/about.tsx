import NewsletterForm from "./newsletter";

export default function About({ dict }: { dict: any }) {
  return (
    <div className="space-y-12" id="about">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">{dict?.about?.title}</h1>
        <p className="text-lg">{dict?.about?.paragraph_1}</p>
        <p className="text-xl">{dict?.about?.paragraph_2}</p>
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">
          {dict?.about?.join_my_newsletter}
        </h1>
        <p className="text-lg">{dict?.about?.join_my_newsletter_description}</p>
        <NewsletterForm dict={dict} />
      </div>
    </div>
  );
}
