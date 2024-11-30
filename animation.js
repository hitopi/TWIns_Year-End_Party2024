// CSSスタイルを動的に追加
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* アニメーション */

        /* 泡が上昇するアニメーション */
        @keyframes floatUp {
            0% {
                transform: translateY(100vh) scale(0.5);
                opacity: 0;
            }
            10% {
                opacity: 0.8;
            }
            50% {
                opacity: 1;
            }
            100% {
                transform: translateY(-10%) scale(1);
                opacity: 0;
            }
        }

        /* 泡のカバーエフェクト */
        @keyframes bubble-cover {
            0% {
                transform: scale(0.1);
                opacity: 1;
            }
            80% {
                transform: scale(1.5);
                opacity: 0.8;
            }
            100% {
                transform: scale(2.5);
                opacity: 0;
            }
        }

        /* 泡がゆらゆらしながら上昇 */
        @keyframes bubbleUp {
            0% {
                transform: translate(-50%, 100px) scale(0.1);
            }
            100% {
                transform: translate(-50%, var(--bubble-end-position, -700px)) scale(1.2);
            }
        }

        /* 泡が弾けるアニメーション */
        @keyframes bubblePop {
            0% {
                transform: translate(-50%, var(--bubble-end-position, -700px)) scale(1.2);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, var(--bubble-end-position, -700px)) scale(4.5);
                opacity: 0;
            }
        }

        /* 魚のアニメーション */
        @keyframes swim {
            0% {
                transform: translateX(0);
            }
            50% {
                transform: translateX(20px);
            }
            100% {
                transform: translateX(0);
            }
        }

        @keyframes swim-reverse {
            0% {
                transform: translateX(0);
            }
            50% {
                transform: translateX(-20px);
            }
            100% {
                transform: translateX(0);
            }
        }

        @keyframes fishSwim {
            0% {
                transform: translateX(-10vw) translateY(0) rotate(0deg);
            }
            25% {
                transform: translateX(25vw) translateY(-10px) rotate(10deg);
            }
            50% {
                transform: translateX(50vw) translateY(10px) rotate(-10deg);
            }
            75% {
                transform: translateX(75vw) translateY(-10px) rotate(5deg);
            }
            100% {
                transform: translateX(110vw) translateY(0) rotate(0deg);
            }
        }

        /* フェードアウトとズーム */
        @keyframes fadeZoomOut {
            0% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(1.2);
            }
        }

        /* 泡のスタイル */
        .bubble {
            position: absolute;
            width: 30px;
            height: 30px;
            background: url('bubble.png') no-repeat center center;
            background-size: contain;
            animation: floatUp 5s linear infinite;
            opacity: 0;
            z-index: 1;
        }

        /* 泡のスタイル */
        .bubble-large {
            position: fixed;
            bottom: 0;
            left: 50%;
            width: 150px;
            height: 150px;
            background: url('bubble.png') no-repeat center center;
            background-size: contain;
            transform: translateX(-50%) scale(0.8);
            animation: bubbleUp 1.5s ease-in-out forwards, bubblePop 0.2s ease-out 1.5s;
            z-index: 9999;
            --bubble-end-position: -700px; /* デフォルト値を設定 */
        }

        /* スマホ向けのスタイル */
        @media (max-width: 768px) {
            .bubble-large {
                --bubble-end-position: -500px; /* 小さい画面では終点を低くする */
            }
        }

        @media (max-width: 480px) {
            .bubble-large {
                --bubble-end-position: -300px; /* さらに低くする */
            }
        }

        /* 魚のスタイル */
        .fish {
            position: absolute;
            width: 100px;
            height: 100px;
            z-index: 10;
        }

        .fish-left {
            top: 20%;
            left: 5%;
            animation: swim 3s linear infinite;
        }

        .fish-right {
            bottom: 20%;
            right: 5%;
            animation: swim-reverse 3s linear infinite;
        }

        .wavy-fish {
            position: absolute;
            animation: fishSwim var(--duration) linear infinite;
            transform-origin: center;
        }

        /* フルスクリーンの泡 */
        .fullscreen-bubble {
            position: fixed;
            top: 50%;
            left: 50%;
            width: 200vw;
            height: 200vh;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            z-index: 9999;
            animation: bubble-cover 1.5s ease-out forwards;
        }

        /* クイズオプション */
        .quiz-option-container {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: nowrap;
            margin-top: 20px;
        }

        .quiz-option {
            font-size: 1.2rem;
            color: #000;
            background: #ffd700;
            padding: 15px 40px;
            border: 3px solid #000;
            border-radius: 8px;
            text-decoration: none;
            box-shadow: 4px 4px 0 #333;
            transition: all 0.2s ease;
            max-width: 30%;
            white-space: nowrap;
            text-align: center;
        }

        .quiz-option:hover {
            transform: translateY(-5px);
            box-shadow: 6px 6px 0 #222;
        }

        /* ボタンが押された際のスタイル */
        .btn.clicked {
            background: #000;
            color: #ffd700;
        }

        .quiz-option.clicked {
            background: #000;
            color: #ffd700;
        }

        /* フェードアウトエフェクト */
        .fullscreen-transition {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(255, 255, 255, 1);
            z-index: 9999;
            animation: fadeZoomOut 1s ease forwards;
        }

        /* メディアクエリ: 小さい画面に対応 */
        @media (max-width: 768px) {
            .bubble-large {
                width: 100px;
                height: 100px;
                animation: bubbleUp 1.2s ease-in-out forwards, bubblePop 0.15s ease-out 1.2s;
            }

            .bubble {
                width: 20px;
                height: 20px;
                animation: floatUp 4s linear infinite;
            }

            .fish {
                width: 70px;
                height: 70px;
            }

            .quiz-option {
                font-size: 1rem;
                padding: 10px 20px;
                max-width: 40%;
            }
        }

        @media (max-width: 480px) {
            .bubble-large {
                width: 70px;
                height: 70px;
                animation: bubbleUp 1s ease-in-out forwards, bubblePop 0.1s ease-out 1s;
            }

            .bubble {
                width: 15px;
                height: 15px;
                animation: floatUp 3s linear infinite;
            }

            .fish {
                width: 50px;
                height: 50px;
            }

            .quiz-option {
                font-size: 0.9rem;
                padding: 8px 15px;
                max-width: 45%;
            }
        }
    `;
    document.head.appendChild(style);
}

// 泡をランダムに生成する
function createBubbles() {
    const bubbleCount = 20; // 泡の数
    const body = document.body;

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = Math.random() * 100 + 'vw'; // 横位置をランダムに
        bubble.style.animationDelay = Math.random() * 5 + 's'; // アニメーション開始時間をランダムに
        bubble.style.animationDuration = 4 + Math.random() * 3 + 's'; // アニメーション時間をランダムに

        // 泡のサイズをランダム化
        const size = 20 + Math.random() * 30; // サイズは20px〜50pxの間
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';

        body.appendChild(bubble);
    }
}

// 魚を生成する
function createFish() {
    const fishLeft = document.createElement('img');
    fishLeft.src = 'fish_1.png';
    fishLeft.alt = 'Fish';
    fishLeft.classList.add('fish', 'fish-left');

    const fishRight = document.createElement('img');
    fishRight.src = 'fish_2.png';
    fishRight.alt = 'Fish';
    fishRight.classList.add('fish', 'fish-right');

    document.body.appendChild(fishLeft);
    document.body.appendChild(fishRight);
}

// サメ
function createWavyFish() {
    const fishCount = 10; // ランダム魚の数
    const body = document.body;

    for (let i = 0; i < fishCount; i++) {
        const fish = document.createElement('img');
        fish.src = 'fish_3.png';
        fish.alt = 'Wavy Fish';
        fish.classList.add('wavy-fish');

        // サイズ設定 (小さめかつランダム)
        const size = 30 + Math.random() * 50; // 30px〜80px
        fish.style.width = `${size}px`;
        fish.style.height = 'auto';

        // ランダムな初期高さ設定
        const startHeight = Math.random() * 100 + 'vh';
        fish.style.top = startHeight;

        // 全体的に速めの速度 (極端なランダム性を残しつつ速く)
        const duration = 2 + Math.random() * 10 + 's'; // 2秒〜12秒
        fish.style.setProperty('--duration', duration);

        // 左端の画面外から開始
        fish.style.left = '-10vw';

        body.appendChild(fish);
    }
}

// クイズオプションボタンにクリックイベントを追加
function addQuizOptionAnimation() {
    document.querySelectorAll('.quiz-option').forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault(); // デフォルトのリンク動作を防止

            // 背景と文字色を変更
            button.classList.add('clicked');

            // フルスクリーンの泡を生成
            const bubbleOverlay = document.createElement('div');
            bubbleOverlay.classList.add('fullscreen-bubble');
            document.body.appendChild(bubbleOverlay);

            // 次のページを決定
            const currentPage = window.location.pathname.split('/').pop(); // 現在のページ名
            let nextPage;

            if (currentPage.startsWith('quiz') && currentPage.endsWith('.html')) {
                const currentNumber = parseInt(currentPage.replace('quiz', '').replace('.html', ''), 10);
                if (currentNumber >= 1 && currentNumber < 10) {
                    nextPage = `quiz${currentNumber + 1}.html`; // 次のクイズページ
                } else if (currentNumber === 10) {
                    nextPage = 'index.html'; // 最後はトップページに戻る
                }
            } else {
                nextPage = 'quiz2.html'; // デフォルト（最初のクイズページ）
            }

            // アニメーション終了後に次のページへ遷移
            bubbleOverlay.addEventListener('animationend', () => {
                window.location.href = nextPage;
            });
        });
    });
}

function addBubbleAnimation() {
    document.querySelectorAll('a.btn').forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault(); // デフォルトのリンク動作を防止

            // 背景と文字色を変更
            button.classList.add('clicked');
            
            // 大きな泡を作成
            const bubbleLarge = document.createElement('div');
            bubbleLarge.classList.add('bubble-large');
            document.body.appendChild(bubbleLarge);

            // 泡が弾けた後にページ遷移を実行
            bubbleLarge.addEventListener('animationend', (e) => {
                if (e.animationName === 'bubblePop') { // 弾けるアニメーションが終了したとき
                    const targetHref = button.getAttribute('href');
                    bubbleLarge.remove(); // 泡を即時削除
                    window.location.href = targetHref; // 次のページに移動
                }
            });
        });
    });
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', () => {
    addAnimationStyles();
    createBubbles();
    createFish();
    createWavyFish();
    addQuizOptionAnimation();
    addBubbleAnimation();
    addPageTransitionAnimation();
});
