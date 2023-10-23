import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// テキストが1文字ずつ表示されるアニメーション
window.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".js-hero-text");
  if (text && text.textContent) {
    text.innerHTML = text.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>",
    );

    gsap.from(".letter", {
      duration: 1, // アニメーションの時間を1秒に設定
      opacity: 0, // 初期状態の透明度を0（完全に透明）に設定
      ease: "power1.out", // イージング効果を設定
      stagger: 0.05, // 各文字のアニメーション開始時間を0.05秒ずつ遅らせる
    });
  }
});

// フェードアップ
ScrollTrigger.batch(".js-fadeUp", {
  onEnter: (batch) =>
    gsap.fromTo(
      batch,
      {
        autoAlpha: 0, // 最初は透明
        y: 30, // 縦方向に20pxずらす
      },
      {
        autoAlpha: 1, // 要素を表示
        duration: 1.5, // 1.5秒かけてアニメーション
        y: 0, // 元の位置に戻す
        stagger: 0.15, // 要素間の遅延時間を設定
        overwrite: true, // 既存のアニメーションを上書き
      },
    ),
  once: true,
});
