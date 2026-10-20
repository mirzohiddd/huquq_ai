// Fisher-Yates — massivni joyida emas, yangi nusxada aralashtiradi.
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Har safar test boshlanganda savollar va variantlar tartibi aralashtiriladi.
// ⚠️ To'g'ri javob brauzerda YO'Q — `order[k]` k-variantning ASL indeksi,
// `i` savolning asl indeksi; server javobni shular bo'yicha tekshiradi.
export function shuffleTest(test) {
  return {
    ...test,
    questions: shuffle(test.questions).map((q) => {
      const order = shuffle(q.options.map((_, i) => i));
      return { ...q, options: order.map((i) => q.options[i]), order };
    }),
  };
}
