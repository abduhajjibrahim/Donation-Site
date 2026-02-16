import { Link } from 'react-router-dom'
import './App.css'

function Story() {
  return (
    <div className="page story-page">
      <header className="hero story-hero">
        <div className="hero-tag">His Story</div>
        <h1>Marwan Elhit</h1>
        <p className="story-byline">Authored by Deena Elhit (Daughter)</p>
        <Link className="story-link" to="/">
          Back to the fundraiser
        </Link>
      </header>

      <section className="story-card">
        <p>Hello everyone,</p>
        <p>
          My father urgently needs a second heart transplant. After suffering
          multiple heart attacks, his heart sustained extreme, irreversible
          damages. Doctors confirmed his heart will not last long due to the
          severity of his failing heart. My father is currently in cardiogenic
          shock. His heart is completely reliant on life-supporting machines
          like the intra-aortic balloon pump to survive. Despite the treatment
          he’s receiving, my father desperately needs a new heart. We were
          unable to find an accepting hospital within Illinois to perform my
          dad’s transplant.
        </p>
        <p>
          After many prayers, my father has been accepted to receive a heart
          transplant at Vanderbilt University Medical Center in Nashville,
          Tennessee. This is the only hospital that has accepted my father.
          However, the hospital requested we must collect $45,000 to proceed
          forward with his care and support, with $25,000 - $30,000 upfront.
          This will pay for medication expenses that are not covered by
          insurance and necessary living expenses as Vanderbilt requires proof
          we can afford to live near the hospital throughout the transplant and
          recovery.
        </p>
        <p>
          We additionally need to collect $30,000 towards my father’s urgent
          air ambulance transfer to Tennessee from Chicago. We are unable to
          proceed forward with his transfer/transplant in Tennessee until the
          expenses have been secured. Otherwise, his care remains at a
          standstill, and his health continues to deteriorate more. We are
          currently time-limited, as each day my dad’s condition is worsening.
          Without receiving help in collecting these funds in time, my father
          will not survive. I am completely terrified of losing my dad.
        </p>
        <p>
          Due to the extreme amounts of requested financial care, we ask for
          your support. If you are able to contribute, no matter the amount, we
          will forever be grateful. Your donations will bring us closer to
          saving my father’s life, to be here with his family, and watch each
          other grow in the years to come. You become part of his survival
          story. This is the hardest request our family has ever have asked
          for, as we have no other choice. Please share this message, every
          donation brings hope for my dad to become eligible for a transplant.
          We can’t imagine our world without him. Thank you for taking the time
          to read our letter.
        </p>
        <p>May God reward you for your kindness.</p>
      </section>
    </div>
  )
}

export default Story
