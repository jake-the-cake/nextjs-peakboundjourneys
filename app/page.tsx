import { SmallCard } from "./_components/SmallCard";

export default function Home() {
  return (
    <main className="mx-10 mt-4 px-8 pb-4 pt-2 light flex-col gap-4">
      <h1>Peak Bound Journeys</h1>
      <p>Greetings. You&apos;ve found the Peak Bound Journeys website. Select a division to explore.</p>
      <div className="flex flex-wrap gap-4">
        <SmallCard
          href='/service'
          label='Service Co'
          color="warning"
        />
                <SmallCard
          href='/shop'
          label='Online Shop'
          color="error"
        />
                <SmallCard
          href='/tours'
          label='Hiking Tours'
          color="success"
        />
                <SmallCard
          href='/garden'
          label='Gardening'
          color="primary"
        />
                <SmallCard
          href='/dev'
          label='Web Development'
          color="accent"
        />
                <SmallCard
          href='/health'
          label='Health & Fitness'
          color="dark"
        />
      </div>
    </main>
  )
}