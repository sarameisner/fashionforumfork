// tekst til om os siden
export default function AboutText() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Om Fashion Forum</h2>
      <div className="flex flex-col md:flex-row gap-10">
        {/* tekst */}
        <div className="md:w-2/3">
          <p className="mb-4 leading-loose pr-4">
            Fashionforum.dk er Danmarks førende digitale medie og jobportal for modebranchen. Vi dækker hele spektret – fra ledelse til praktikanter, fra de kreative fag til de administrative – og sikrer, at branchens vigtigste nyheder, tendenser og jobmuligheder når ud til de rette mennesker. Fashion Forum fungerer som et samlingspunkt for modebranchen og som et redaktionelt univers, hvor faglighed, netværk og indsigt mødes. Vi ønsker at styrke dialogen i og omkring branchen – med øje for både forretning og æstetik, bæredygtighed og innovation. Vi udgiver daglige nyheder, interviews, debatindlæg og baggrundsartikler, og vi er stolte af at facilitere Danmarks største specialiserede jobplatform inden for mode og livsstil. Fashionforum.dk er en selvstændig enhed under Copenhagen Fashion Week
            og redigeres uafhængigt af et dedikeret team med base i København. Inspirerer vi dig til en artikel? Dejligt. Husk blot, at al information på Fashionforum.dk er beskyttet af ophavsretsloven. Ved citat skal “Fashionforum.dk” angives som kilde – også i online sammenhæng, hvor der skal linkes direkte til det citerede indhold.
          </p>
        </div>

        {/* ikoner */}
        <div className="md:w-1/3 flex flex-col items-center gap-6">
          <img src="https://fashionforum.dk/wp-content/uploads/2020/04/ffbb8304-1219-402b-b2f3-e7d29f9ff863-1024x759.png" alt="Partner 1" className="w-full max-w-[200px] h-auto object-contain" />
          <img src="https://fashionforum.dk/wp-content/uploads/2020/07/esa_nomineret_2020_pink-300x300.jpg" alt="Partner 2" className="w-full max-w-[150px] h-auto object-contain" />
        </div>
      </div>
    </section>
  );
}
