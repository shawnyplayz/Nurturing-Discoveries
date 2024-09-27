// components/SpeechBubble.js
export default function SpeechBubble() {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative bg-blue-700 text-white p-8 max-w-lg">
          <div
            className="relative p-6 text-center"
            style={{
              clipPath:
                'polygon(10% 0%, 100% 0%, 100% 80%, 75% 80%, 70% 100%, 65% 80%, 0% 80%)',
            }}
          >
            <p className="leading-relaxed">
              Corquent per conubia nostra, per inceptos himenaeos. Suspendisse gravida vitae nisi Class aptent taciti sociosqu ad litora
            </p>
            <span className="block mt-4 font-semibold">— Jenny Wilson</span>
          </div>
        </div>
      </div>
    );
  }
  