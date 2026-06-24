import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politica de confidențialitate — Fit fără filtre',
  description: 'Politica de confidențialitate a evenimentului Fit fără filtre, organizat de Body Mind Hub.',
}

export default function PoliticaDeConfidentialitate() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white px-6 py-16 sm:py-24">
      <div className="max-w-2xl mx-auto">

        <div className="mb-12">
          <Link
            href="/"
            className="text-xs uppercase tracking-widest text-gold/70 hover:text-gold transition-colors inline-flex items-center gap-2"
          >
            ← Înapoi la eveniment
          </Link>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl text-white mb-3">
          Politica de confidențialitate
        </h1>
        <p className="text-gray-500 text-sm mb-12">Ultima actualizare: iunie 2026</p>

        <div className="space-y-10 text-sm text-gray-400 leading-relaxed">

          <section>
            <h2 className="font-serif text-xl text-white mb-3">1. Operatorul de date</h2>
            <p>
              Datele tale cu caracter personal sunt prelucrate de <strong className="text-white">Body Mind Hub</strong>,
              reprezentat de Rareș Pantis, în calitate de organizator al evenimentului „Fit fără filtre".
            </p>
            <p className="mt-2">
              Contact: <a href="mailto:contact@thebodymindhub.com" className="text-gold/70 hover:text-gold transition-colors">contact@thebodymindhub.com</a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-white mb-3">2. Date colectate</h2>
            <p>Prin formularul de rezervare, colectăm următoarele date:</p>
            <ul className="mt-3 space-y-1.5 list-none">
              {['Nume și prenume', 'Adresă de email', 'Număr de telefon'].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold/50 mt-0.5 flex-shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-white mb-3">3. Scopul prelucrării</h2>
            <p>Datele tale sunt utilizate exclusiv pentru:</p>
            <ul className="mt-3 space-y-1.5 list-none">
              {[
                'Confirmarea rezervării și trimiterea detaliilor de participare',
                'Comunicarea informațiilor despre eveniment (oră, locație, modificări)',
                'Procesarea plății biletului',
                'Trimiterea facturii, dacă este solicitată',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold/50 mt-0.5 flex-shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-white mb-3">4. Temeiul juridic</h2>
            <p>
              Prelucrarea se bazează pe <strong className="text-white">consimțământul tău explicit</strong> (Art. 6(1)(a) GDPR),
              exprimat prin bifarea căsuței de acord din formularul de rezervare.
              Poți retrage consimțământul în orice moment, fără ca aceasta să afecteze legalitatea
              prelucrărilor anterioare.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-white mb-3">5. Destinatarii datelor</h2>
            <p>
              Datele tale nu sunt vândute sau transmise unor terți în scopuri de marketing.
              Acestea pot fi accesate de:
            </p>
            <ul className="mt-3 space-y-1.5 list-none">
              {[
                'ClickUp — platformă de management intern al rezervărilor',
                'Stripe — procesator de plăți securizate (PCI-DSS compliant)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold/50 mt-0.5 flex-shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Ambii furnizori sunt obligați contractual să respecte GDPR și să utilizeze datele
              exclusiv în scopul specificat.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-white mb-3">6. Perioada de stocare</h2>
            <p>
              Datele tale sunt păstrate pe o perioadă de maximum <strong className="text-white">12 luni</strong> de
              la data evenimentului, după care sunt șterse definitiv, cu excepția cazului în care
              legislația fiscală impune o perioadă mai lungă (ex. documente contabile — 5 ani).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-white mb-3">7. Drepturile tale</h2>
            <p>Conform GDPR, beneficiezi de următoarele drepturi:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                { d: 'Dreptul de acces', d2: 'poți solicita o copie a datelor tale.' },
                { d: 'Dreptul la rectificare', d2: 'poți cere corectarea datelor inexacte.' },
                { d: 'Dreptul la ștergere', d2: 'poți solicita ștergerea datelor tale („dreptul de a fi uitat").' },
                { d: 'Dreptul la restricționarea prelucrării', d2: 'poți cere limitarea prelucrării în anumite condiții.' },
                { d: 'Dreptul la portabilitate', d2: 'poți primi datele tale într-un format structurat, lizibil de mașină.' },
                { d: 'Dreptul la opoziție', d2: 'poți obiecta față de prelucrarea datelor tale.' },
                { d: 'Dreptul de a retrage consimțământul', d2: 'oricând, fără costuri.' },
              ].map(({ d, d2 }) => (
                <li key={d} className="flex items-start gap-2">
                  <span className="text-gold/50 mt-0.5 flex-shrink-0">—</span>
                  <span><strong className="text-white">{d}</strong> — {d2}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Pentru exercitarea oricărui drept, ne contactezi la{' '}
              <a href="mailto:contact@thebodymindhub.com" className="text-gold/70 hover:text-gold transition-colors">
                contact@thebodymindhub.com
              </a>
              . Răspundem în maxim 30 de zile.
            </p>
            <p className="mt-3">
              Ai dreptul de a depune o plângere la{' '}
              <strong className="text-white">Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong>{' '}
              — <span className="text-white">www.dataprotection.ro</span>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-white mb-3">8. Securitatea datelor</h2>
            <p>
              Luăm măsuri tehnice și organizatorice adecvate pentru a proteja datele tale împotriva
              accesului neautorizat, pierderii sau divulgării. Comunicările sunt criptate prin HTTPS.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-white mb-3">9. Modificări ale politicii</h2>
            <p>
              Această politică poate fi actualizată periodic. Versiunea curentă este întotdeauna
              disponibilă pe această pagină. Modificările semnificative vor fi comunicate prin email.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <Link
            href="/"
            className="inline-block bg-gold text-black px-8 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-gold/90 transition-colors"
          >
            Înapoi la eveniment
          </Link>
        </div>

      </div>
    </div>
  )
}
