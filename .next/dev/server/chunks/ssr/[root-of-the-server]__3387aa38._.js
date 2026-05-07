module.exports = [
"[project]/src/plugins/tp-cursor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>cursorAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jquery/dist/jquery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/gsap-core.js [app-ssr] (ecmascript)");
;
;
function cursorAnimation() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    {
        function mouseMove(e) {
            $mouse.x = e.clientX;
            $mouse.y = e.clientY;
        }
        function updatePosition() {
            if (!$active) {
                $pos.x += ($mouse.x - $pos.x) * $ratio;
                $pos.y += ($mouse.y - $pos.y) * $ratio;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set($ball, {
                    x: $pos.x,
                    y: $pos.y
                });
            }
        }
        function callParallax(e, parent) {
            parallaxIt(e, parent, parent.querySelector(".tp-magnetic-item"), 25); // magnetic area = higher number is more attractive
        }
        function parallaxIt(e, parent, target, movement) {
            var boundingRect = parent.getBoundingClientRect();
            var relX = e.clientX - boundingRect.left;
            var relY = e.clientY - boundingRect.top;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(target, {
                duration: 0.3,
                x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
                y: (relY - boundingRect.height / 2) / boundingRect.height * movement,
                ease: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Power2"].easeOut
            });
        }
        function parallaxCursor(e, parent, movement) {
            var rect = parent.getBoundingClientRect();
            var relX = e.clientX - rect.left;
            var relY = e.clientY - rect.top;
            $pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
            $pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to($ball, {
                duration: 0.3,
                x: $pos.x,
                y: $pos.y
            });
        }
    }
}
}),
"[project]/src/plugins/webgl.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-this-alias */ /* eslint-disable @typescript-eslint/no-unused-expressions */ __turbopack_context__.s([
    "default",
    ()=>WebGL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jquery/dist/jquery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
;
;
class WebGL {
    constructor(e){
        this.scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"](), this.vertex = "varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );}", this.material = e.material, this.fragment = e.fragment, this.uniforms = e.uniforms, this.renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"](), this.width = window.innerWidth, this.height = window.innerHeight, this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setSize(this.width, this.height), this.renderer.setClearColor(2303786, 1), this.container = document.getElementById("canvas-slider"), this.images = Array.from(document.querySelectorAll(".slide-img")), this.width = this.container.offsetWidth, this.height = this.container.offsetHeight, this.container.appendChild(this.renderer.domElement), this.camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"](70, window.innerWidth / window.innerHeight, 0.001, 1e3), this.camera.position.set(0, 0, 2), this.current = 0, this.textures = [], this.isRunning = !1, this.paused = !0, this.initiate(()=>{
            this.setupResize(), this.addObjects(), this.resize(), this.play();
        });
    }
    initiate(e) {
        const t = [];
        const i = this;
        this.images.forEach((e, s)=>{
            let h = new Promise((t)=>{
                i.textures[s] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextureLoader"]().load(e.src, t);
            });
            t.push(h);
        }), Promise.all(t).then(()=>{
            e();
        });
    }
    setupResize() {
        window.addEventListener("resize", this.resize.bind(this));
    }
    resize() {
        let e, t;
        this.width = this.container.offsetWidth, this.height = this.container.offsetHeight, this.renderer.setSize(this.width, this.height), this.camera.aspect = this.width / this.height, this.imageAspect = this.textures[0].image.height / this.textures[0].image.width, this.height / this.width > this.imageAspect ? (e = this.width / this.height * this.imageAspect, t = 1) : (e = 1, t = this.height / this.width / this.imageAspect), this.material.uniforms.resolution.value.x = this.width, this.material.uniforms.resolution.value.y = this.height, this.material.uniforms.resolution.value.z = e, this.material.uniforms.resolution.value.w = t;
        const i = this.camera.position.z;
        this.camera.fov = 180 / Math.PI * 2 * Math.atan(1 / (2 * i)), this.plane.scale.x = this.camera.aspect, this.plane.scale.y = 1, this.camera.updateProjectionMatrix();
    }
    addObjects() {
        let e = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextureLoader"]().load((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("#showcase-slider-holder").attr("data-pattern-img"));
        e.wrapS = e.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RepeatWrapping"], this.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
            uniforms: {
                effectFactor: {
                    type: "f",
                    value: 0.15
                },
                dispFactor: {
                    type: "f",
                    value: 0
                },
                currentImage: {
                    type: "t",
                    value: this.textures[0]
                },
                nextImage: {
                    type: "t",
                    value: this.textures[1]
                },
                disp: {
                    type: "t",
                    value: e
                },
                resolution: {
                    type: "v4",
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"]()
                }
            },
            vertexShader: this.vertex,
            fragmentShader: this.fragment,
            transparent: !0,
            opacity: 1
        }), this.geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](1, 1, 2, 2), this.plane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](this.geometry, this.material), this.scene.add(this.plane);
    }
    stop() {
        this.paused = !0;
    }
    play() {
        this.paused = !1, this.render();
    }
    render() {
        this.paused || (requestAnimationFrame(this.render.bind(this)), this.renderer.render(this.scene, this.camera));
    }
}
}),
"[project]/src/plugins/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$plugins$2f$tp$2d$cursor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/plugins/tp-cursor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$plugins$2f$webgl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/plugins/webgl.js [app-ssr] (ecmascript)");
;
;
}),
"[project]/src/hooks/useCursorAndBackground.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCursorAndBackground",
    ()=>useCursorAndBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$plugins$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/plugins/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
const useCursorAndBackground = (config = {})=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Only run on client side
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        // Add cursor elements to DOM
        const cursorHtml = undefined;
    }, [
        config.bgColor,
        config.customClass
    ]);
};
}),
"[project]/src/components/provider/CustomCursorProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CursorAndBackgroundProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCursorAndBackground$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCursorAndBackground.ts [app-ssr] (ecmascript)");
"use client";
;
;
function CursorAndBackgroundProvider({ children, bgColor, customClass }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCursorAndBackground$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCursorAndBackground"])({
        bgColor,
        customClass
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/src/hooks/useGsapAnimation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PPAboutAnimation",
    ()=>PPAboutAnimation,
    "PortfolioSlicerAnimation",
    ()=>PortfolioSlicerAnimation,
    "animationParagraph",
    ()=>animationParagraph,
    "brandImgAnim",
    ()=>brandImgAnim,
    "buttonBounceAnimation",
    ()=>buttonBounceAnimation,
    "careerAnimation",
    ()=>careerAnimation,
    "charAnimation",
    ()=>charAnimation,
    "contactBgAnimation",
    ()=>contactBgAnimation,
    "ctaAnimation",
    ()=>ctaAnimation,
    "designAwardAnimation",
    ()=>designAwardAnimation,
    "designChooseAnimation",
    ()=>designChooseAnimation,
    "designProjectAnimation",
    ()=>designProjectAnimation,
    "eyeAnimation",
    ()=>eyeAnimation,
    "fadeAnimation",
    ()=>fadeAnimation,
    "funfactPanelAnimation",
    ()=>funfactPanelAnimation,
    "gsapBackgroundAnim",
    ()=>gsapBackgroundAnim,
    "heroAnimation",
    ()=>heroAnimation,
    "heroBgAnimation",
    ()=>heroBgAnimation,
    "imageRevealAnimation",
    ()=>imageRevealAnimation,
    "innerServiceAnimation",
    ()=>innerServiceAnimation,
    "panelAnimation",
    ()=>panelAnimation,
    "panelPinAnimation",
    ()=>panelPinAnimation,
    "perspectiveAnim",
    ()=>perspectiveAnim,
    "portfolioAnimation",
    ()=>portfolioAnimation,
    "portfolioItemPinAnimation",
    ()=>portfolioItemPinAnimation,
    "portfolioProjectAnimation",
    ()=>portfolioProjectAnimation,
    "portfolioShowcaseAnimation",
    ()=>portfolioShowcaseAnimation,
    "portfolioTitleAnimation",
    ()=>portfolioTitleAnimation,
    "productBannerAnimation",
    ()=>productBannerAnimation,
    "projectDetailsAnim",
    ()=>projectDetailsAnim,
    "randChar",
    ()=>randChar,
    "revalEffectAnimation",
    ()=>revalEffectAnimation,
    "scrollAnimation",
    ()=>scrollAnimation,
    "scrollMovingText",
    ()=>scrollMovingText,
    "servicePanelAnimation",
    ()=>servicePanelAnimation,
    "setupTextHoverEffect",
    ()=>setupTextHoverEffect,
    "splitTextAnimation",
    ()=>splitTextAnimation,
    "studioProjectAnimation",
    ()=>studioProjectAnimation,
    "teamAnimation",
    ()=>teamAnimation,
    "textInvertAnim",
    ()=>textInvertAnim,
    "textInvertAnim1",
    ()=>textInvertAnim1,
    "textInvertAnim2",
    ()=>textInvertAnim2,
    "textInvertAnim3",
    ()=>textInvertAnim3,
    "textPerspectiveAnimation",
    ()=>textPerspectiveAnimation,
    "textRevealAnimation",
    ()=>textRevealAnimation,
    "textRightScrollAnimation",
    ()=>textRightScrollAnimation,
    "videoAnimation",
    ()=>videoAnimation,
    "zoomInAnimation",
    ()=>zoomInAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/SplitText.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
;
;
;
// Register GSAP plugins
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const fadeAnimation = ()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".tp_fade_anim").forEach((item)=>{
        const tp_fade_offset = item.dataset.fadeOffset ? parseInt(item.dataset.fadeOffset) : 40;
        const tp_duration_value = item.dataset.duration ? parseFloat(item.dataset.duration) : 0.75;
        const tp_fade_direction = item.dataset.fadeFrom || "bottom";
        const tp_onscroll_value = item.dataset.onScroll !== "0";
        const tp_delay_value = item.dataset.delay ? parseFloat(item.dataset.delay) : 0.15;
        const tp_ease_value = item.dataset.ease || "power2.out";
        const tp_anim_setting = {
            opacity: 0,
            ease: tp_ease_value,
            duration: tp_duration_value,
            delay: tp_delay_value,
            x: tp_fade_direction === "left" ? -tp_fade_offset : tp_fade_direction === "right" ? tp_fade_offset : 0,
            y: tp_fade_direction === "top" ? -tp_fade_offset : tp_fade_direction === "bottom" ? tp_fade_offset : 0
        };
        if (tp_onscroll_value) {
            tp_anim_setting.scrollTrigger = {
                trigger: item,
                start: 'top 85%'
            };
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(item, tp_anim_setting);
    });
};
const revalEffectAnimation = ()=>{
    document.querySelectorAll(".tp_reveal_anim").forEach((areveal)=>{
        const duration = areveal.getAttribute("data-duration") || 1.5;
        const onScroll = areveal.getAttribute("data-on-scroll") || 1;
        const stagger = areveal.getAttribute("data-stagger") ? parseFloat(areveal.getAttribute("data-stagger")) : 0.02;
        const delay = areveal.getAttribute("data-delay") || 0.05;
        const split = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplitText"](areveal, {
            type: "lines,words,chars",
            linesClass: "tp-reveal-line"
        });
        const animConfig = {
            duration,
            delay,
            ease: "circ.out",
            y: 80,
            stagger,
            opacity: 0
        };
        if (onScroll == 1) {
            animConfig.scrollTrigger = {
                trigger: areveal,
                start: 'top 85%'
            };
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(split.chars, animConfig);
    });
};
const charAnimation = ()=>{
    const charElements = document.querySelectorAll(".tp-char-animation");
    if (charElements.length > 0) {
        const animationItems = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".tp-char-animation");
        animationItems.forEach((splitTextLine)=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: 'top 90%',
                    end: 'bottom 60%',
                    scrub: false,
                    markers: false,
                    toggleActions: 'play none none none'
                }
            });
            // Type assertion for SplitText result
            const itemSplitted = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplitText"](splitTextLine, {
                type: "chars, words"
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(splitTextLine, {
                perspective: 300
            });
            itemSplitted.split({
                type: "chars, words"
            });
            tl.from(itemSplitted.chars, {
                duration: 1,
                delay: 0.5,
                x: 100,
                autoAlpha: 0,
                stagger: 0.05
            });
        });
    }
};
const textRightScrollAnimation = ()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia().add("(min-width: 991px)", ()=>{
        document.querySelectorAll(".title-box").forEach((box)=>{
            const rightElements = box.querySelectorAll('.tp-text-right-scroll');
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                scrollTrigger: {
                    trigger: box,
                    start: "top 100%",
                    end: "bottom top",
                    scrub: true,
                    markers: false
                }
            });
            if (rightElements.length) {
                tl.fromTo(rightElements, {
                    xPercent: 50
                }, {
                    xPercent: -20,
                    ease: "power1.out"
                }, 0);
            }
        });
    });
};
const servicePanelAnimation = ()=>{
    const sv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    sv.add("(min-width: 1199px)", ()=>{
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
        const projectpanels = document.querySelectorAll('.tp-service-panel');
        const baseOffset = 150;
        const offsetIncrement = 120;
        projectpanels.forEach((section, index)=>{
            const topOffset = baseOffset + index * offsetIncrement;
            tl.to(section, {
                scrollTrigger: {
                    trigger: section,
                    pin: section,
                    scrub: 1,
                    start: `top ${topOffset}px`,
                    end: "bottom 120%",
                    endTrigger: '.tp-service-pin',
                    pinSpacing: false,
                    markers: false
                }
            });
        });
    });
};
const funfactPanelAnimation = ()=>{
    const mm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    mm.add("(min-width: 1200px)", ()=>{
        const wrap = document.querySelector(".tp-funfact-panel-wrap");
        if (!wrap) return;
        const sections = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".tp-funfact-panel");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                start: "top 70px",
                trigger: wrap,
                pin: true,
                scrub: 1,
                end: ()=>"+=" + wrap.offsetWidth
            }
        });
    });
};
const panelAnimation = ()=>{
    const pr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    pr.add("(min-width: 1199px)", ()=>{
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
        const panels = document.querySelectorAll('.tp-panel-pin');
        panels.forEach((section)=>{
            tl.to(section, {
                scrollTrigger: {
                    trigger: section,
                    pin: section,
                    scrub: 1,
                    start: 'top 10%',
                    end: "bottom 99%",
                    endTrigger: '.tp-panel-pin-area',
                    pinSpacing: false,
                    markers: false
                }
            });
        });
    });
};
const textInvertAnim = (className)=>{
    const split = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplitText"](`.${className}`, {
        type: "lines"
    });
    split.lines.forEach((target)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(target, {
            backgroundPositionX: 0,
            ease: "none",
            scrollTrigger: {
                trigger: target,
                scrub: 1,
                start: 'top 85%',
                end: "bottom center"
            }
        });
    });
};
const textInvertAnim1 = ()=>textInvertAnim('tp_text_invert');
const textInvertAnim2 = ()=>textInvertAnim('tp_text_invert_2');
const textInvertAnim3 = ()=>textInvertAnim('tp_text_invert_3');
const videoAnimation = ()=>{
    const vd = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    vd.add("(min-width: 1199px)", ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            scrollTrigger: {
                trigger: ".tp-video-area",
                scrub: 1,
                pin: true,
                start: "top 40px",
                end: "+=100%"
            }
        }).to(".tp-video-thumb-wrap", {
            scale: 3.2,
            ease: "none"
        });
    });
};
const heroAnimation = ()=>{
    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
    const hr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    hr.add("(min-width: 768px)", ()=>{
        const panels = document.querySelectorAll('.tp-hero-2-area');
        panels.forEach((section)=>{
            tl.to(section, {
                scrollTrigger: {
                    trigger: '.tp-hero-2-wrapper',
                    pin: '.tp-hero-2-area',
                    scrub: 1,
                    start: 'top 0',
                    end: "bottom 0%",
                    endTrigger: '.tp-hero-2-wrapper',
                    pinSpacing: false,
                    markers: false
                }
            });
        });
    });
};
const designChooseAnimation = ()=>{
    const pw = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    pw.add("(min-width: 1200px)", ()=>{
        document.querySelectorAll('.design-choose-item-wrap').forEach((item)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(item.querySelector('.design-choose-item-1'), {
                x: -400,
                rotate: -40
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(item.querySelector('.design-choose-item-2'), {
                x: 400,
                rotate: 40
            });
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                scrollTrigger: {
                    trigger: item,
                    start: 'top 120%',
                    end: 'top 20%',
                    scrub: 1
                }
            });
            tl.to(item.querySelector('.design-choose-item-1'), {
                x: 0,
                rotate: 0
            }).to(item.querySelector('.design-choose-item-2'), {
                x: 0,
                rotate: 0
            }, 0);
        });
    });
};
const designAwardAnimation = ()=>{
    const aw = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    aw.add("(min-width: 991px)", ()=>{
        const awardItems = document.querySelectorAll('.design-award-item');
        awardItems.forEach(function(div) {
            div.addEventListener('mouseenter', function() {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(div, {
                    width: '100%',
                    duration: 2,
                    ease: 'expo.out'
                });
            });
            div.addEventListener('mouseleave', function() {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(div, {
                    width: '70%',
                    duration: 2,
                    ease: 'expo.out'
                });
            });
        });
    });
};
const studioProjectAnimation = ()=>{
    const perspective_1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    perspective_1.add("(min-width: 767px)", ()=>{
        const wrap = document.querySelector(".studio-project-wrap");
        if (wrap) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(".studio-project-thumb", {
                perspective: 60
            });
            const images = document.querySelectorAll(".studio-project-thumb img");
            images.forEach((img)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(img, {
                    rotationX: 1.8,
                    z: "0vh"
                }, {
                    rotationX: -0.5,
                    z: "-2vh",
                    scrollTrigger: {
                        trigger: img,
                        start: "top+=150px bottom",
                        end: "bottom top",
                        immediateRender: false,
                        scrub: 0.1
                    }
                });
            });
        }
    });
};
function textRevealAnimation() {
    const elements = document.querySelectorAll('.tp-text-revel-anim');
    elements.forEach((element)=>{
        // Helper function to safely get and parse attributes
        const getNumberAttribute = (attr, defaultValue)=>{
            const value = element.getAttribute(attr);
            return value ? parseFloat(value) : defaultValue;
        };
        const getStringAttribute = (attr, defaultValue)=>{
            return element.getAttribute(attr) || defaultValue;
        };
        const duration = getNumberAttribute('data-duration', 1);
        const onScroll = getNumberAttribute('data-on-scroll', 1);
        const stagger = getNumberAttribute('data-stagger', 0.02);
        const delay = getNumberAttribute('data-delay', 0.05);
        const ease = getStringAttribute('data-ease', 'circ.out');
        const split = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplitText"](element, {
            type: "lines,words,chars",
            linesClass: "tp-revel-line"
        });
        const animationProps = {
            duration,
            delay,
            ease,
            y: 80,
            stagger,
            opacity: 0
        };
        if (onScroll === 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(split.chars, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%'
                },
                ...animationProps
            });
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(split.chars, animationProps);
        }
    });
}
function animationParagraph() {
    const paragraphs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray('.tp_text_anim p');
    paragraphs.forEach((paragraph)=>{
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            scrollTrigger: {
                trigger: paragraph,
                start: 'top 90%',
                end: 'bottom 60%',
                scrub: false,
                markers: false,
                toggleActions: 'play none none none'
            }
        });
        const splitText = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplitText"](paragraph, {
            type: "lines"
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(paragraph, {
            perspective: 400
        });
        tl.from(splitText.lines, {
            duration: 1,
            delay: 0.2,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1
        });
    });
}
const teamAnimation = ()=>{
    const tm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    tm.add("(min-width: 991px)", ()=>{
        const tl_team = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
        const panels = document.querySelectorAll('.studio-team-area');
        panels.forEach((section)=>{
            tl_team.to(section, {
                scrollTrigger: {
                    trigger: '.studio-team-area',
                    pin: '.studio-team-title-box',
                    scrub: 1,
                    start: 'top 17%',
                    end: "bottom 90%",
                    endTrigger: '.studio-team-area',
                    pinSpacing: false,
                    markers: false
                }
            });
        });
    });
};
const textPerspectiveAnimation = ()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".tp-text-perspective").forEach((splitTextLine)=>{
        const delayAttr = splitTextLine.getAttribute('data-delay');
        const delay_value = delayAttr ? parseFloat(delayAttr) : 0.5;
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: 'top 85%',
                scrub: false,
                markers: false,
                toggleActions: 'play none none none'
            }
        });
        const itemSplitted = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplitText"](splitTextLine, {
            type: "lines"
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(splitTextLine, {
            perspective: 400
        });
        itemSplitted.split({
            type: "lines"
        });
        tl.from(itemSplitted.lines, {
            duration: 1,
            delay: delay_value,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1
        });
    });
};
const eyeAnimation = ()=>{
    const eyeball = (e)=>{
        const eyes = document.querySelectorAll('.eye');
        eyes.forEach((eye)=>{
            const rect = eye.getBoundingClientRect();
            const x = rect.left + eye.clientWidth / 3;
            const y = rect.top + eye.clientHeight / 3;
            const radian = Math.atan2(e.pageX - x, e.pageY - y);
            const rotation = radian * (180 / Math.PI) * -1 + 270;
            eye.style.transform = `rotate(${rotation}deg)`;
        });
    };
    document.body.addEventListener('mousemove', eyeball);
    return ()=>{
        document.body.removeEventListener('mousemove', eyeball);
    };
};
function panelPinAnimation() {
    const mm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    mm.add("(min-width: 1199px)", ()=>{
        const panels = document.querySelectorAll('.stack-panel-pin');
        if (!panels.length) return;
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
        panels.forEach((section)=>{
            tl.to(section, {
                scrollTrigger: {
                    trigger: section,
                    pin: true,
                    scrub: 1,
                    start: 'top top',
                    end: "bottom 100%",
                    endTrigger: '.stack-panel-pin-area',
                    pinSpacing: false,
                    markers: false
                }
            });
        });
    });
}
const gsapBackgroundAnim = ()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(".tp-gsap-bg", {
        scaleX: 1
    });
    const mm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    mm.add("(min-width:1400px)", ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".tp-gsap-bg", {
            scrollTrigger: {
                trigger: ".tp-gsap-bg",
                scrub: 0.2,
                start: "top 90%",
                end: "bottom 100%"
            },
            scaleX: 0.85,
            borderRadius: "60px",
            transformOrigin: "center center",
            ease: "none"
        });
    });
};
const splitTextAnimation = ()=>{
    const splitTextElements = document.querySelectorAll('.tp-split-text');
    if (splitTextElements.length === 0) return;
    const animations = [];
    const splits = [];
    splitTextElements.forEach((el)=>{
        // Create SplitText instance
        const split = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplitText"](el, {
            type: "lines,words,chars",
            linesClass: "tp-split-line"
        });
        splits.push(split);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(el, {
            perspective: 400
        });
        const animationProps = {
            opacity: 0
        };
        if (el.classList.contains('tp-split-right')) animationProps.x = "50";
        if (el.classList.contains('tp-split-left')) animationProps.x = "-50";
        if (el.classList.contains('tp-split-up')) animationProps.y = "80";
        if (el.classList.contains('tp-split-down')) animationProps.y = "-80";
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(split.chars, animationProps);
        // Create animation
        const anim = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(split.chars, {
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                markers: false
            },
            x: "0",
            y: "0",
            rotateX: "0",
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.02
        });
        animations.push(anim);
    });
};
function zoomInAnimation() {
    const zoomElements = document.querySelectorAll('.anim-zoomin');
    zoomElements.forEach((element)=>{
        const wrapper = document.createElement('div');
        wrapper.className = 'anim-zoomin-wrap';
        wrapper.style.overflow = 'hidden';
        // Wrap the element
        element.parentNode?.insertBefore(wrapper, element);
        wrapper.appendChild(element);
        // Create animation timeline
        const zoomInTimeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            scrollTrigger: {
                trigger: wrapper,
                start: 'top 100%',
                markers: false
            }
        });
        zoomInTimeline.from(element, {
            duration: 2,
            autoAlpha: 0,
            scale: 1.2,
            ease: 'power2.out',
            clearProps: 'all'
        });
    });
    return null;
}
function portfolioTitleAnimation() {
    const pm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    pm.add("(min-width: 1200px)", ()=>{
        const portfolioArea = document.querySelector('.st-portfolio-area');
        if (!portfolioArea) return;
        const projectText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            scrollTrigger: {
                trigger: portfolioArea,
                start: 'top 5%',
                end: "bottom 55%",
                pin: ".st-portfolio-heading",
                markers: false,
                pinSpacing: false,
                scrub: 1
            }
        });
        projectText.set(".st-portfolio-title", {
            scale: 0.9,
            duration: 2
        }).to(".st-portfolio-title", {
            scale: 1.2,
            duration: 2
        }).to(".st-portfolio-title", {
            scale: 1.2,
            duration: 2
        }, "+=2");
        // Cleanup function
        return ()=>{
            projectText.kill();
        };
    });
}
const ctaAnimation = ()=>{
    const blogArea = document.querySelector('.st-blog-area');
    if (!blogArea) return;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".st-cta-bg-circle", {
        scrollTrigger: {
            trigger: ".st-cta-area",
            scrub: 0.2,
            start: "top 70%",
            end: "bottom 100%"
        },
        duration: 2,
        scaleX: 1,
        borderRadius: "1100px 1100px 0 0",
        transformOrigin: "top center",
        ease: "none"
    });
    return ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach((trigger)=>trigger.kill());
    };
};
function imageRevealAnimation() {
    const tp_img_reveal = document.querySelectorAll(".tp_img_reveal");
    if (!tp_img_reveal.length) return ()=>{};
    const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
        tp_img_reveal.forEach((img_reveal)=>{
            const image = img_reveal.querySelector("img");
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                scrollTrigger: {
                    trigger: img_reveal,
                    start: "top 70%"
                }
            });
            tl.set(img_reveal, {
                autoAlpha: 1
            });
            tl.from(img_reveal, {
                duration: 1.5,
                xPercent: -100,
                ease: "power2.out"
            });
            tl.from(image, {
                duration: 1.5,
                xPercent: 100,
                scale: 1.5,
                delay: -1.5,
                ease: "power2.out"
            });
        });
    });
    return ()=>ctx.revert();
}
function portfolioProjectAnimation() {
    // Animation timeline
    const project_text = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
        scrollTrigger: {
            trigger: ".tp-project-5-2-area",
            start: 'top center-=350',
            end: "bottom 150%",
            pin: ".tp-project-5-2-title",
            markers: false,
            pinSpacing: false,
            scrub: 1
        }
    });
    project_text.set(".tp-project-5-2-title", {
        scale: 0.6,
        duration: 2
    }).to(".tp-project-5-2-title", {
        scale: 1,
        duration: 2
    }).to(".tp-project-5-2-title", {
        scale: 1,
        duration: 2
    }, "+=2");
    // Cleanup function
    return ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach((trigger)=>trigger.kill());
        project_text.kill();
    };
}
const randChar = ()=>{
    const chars = "hello@gmail.com";
    return chars[Math.floor(Math.random() * chars.length)];
};
const setupTextHoverEffect = ()=>{
    document.querySelectorAll('.codetext').forEach((t)=>{
        const arr1 = t.innerHTML.split('');
        const arr2 = arr1.map(()=>randChar());
        t.onpointerover = ()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
            let step = 0;
            tl.fromTo(t, {
                innerHTML: arr2.join('')
            }, {
                duration: arr1.length / 20,
                ease: 'power4.in',
                delay: 0.1,
                onUpdate: ()=>{
                    const progress = Math.floor(tl.progress() * arr1.length);
                    if (step !== progress) {
                        step = progress;
                        arr1.forEach((_, i)=>arr2[i] = randChar());
                        let start = arr1.slice(0, progress).join('');
                        let end = arr2.slice(progress).join('');
                        if (t.classList.contains('fromRight')) {
                            start = arr2.slice(0, progress).join('');
                            end = arr1.slice(progress).join('');
                        }
                        t.innerHTML = start + end;
                    }
                }
            });
        };
    });
};
function productBannerAnimation() {
    const shop_thumb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    const wrap = document.querySelector('.tp-shop-product-area');
    shop_thumb.add("(min-width: 1200px)", ()=>{
        if (wrap) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: ".tp-shop-product-area",
                start: "top 15px",
                end: "bottom 103%",
                pin: ".tp-shop-product-banner",
                pinSpacing: true
            });
        }
    });
    return ()=>{
        shop_thumb.revert();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach((trigger)=>trigger.kill());
    };
}
function heroBgAnimation() {
    const t2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
        scrollTrigger: {
            trigger: ".cr-hero-bottom-wrap, .cr-footer-bg",
            start: "top 110%"
        }
    });
    t2.from(".bg-b", {
        y: 100,
        opacity: 0,
        duration: 1
    });
    t2.from(".bg-l", {
        x: 100,
        opacity: 0,
        duration: 1
    }, "-=0.5");
    t2.from(".bg-r", {
        x: -100,
        opacity: 0,
        duration: 1
    }, "-=1");
}
function PPAboutAnimation() {
    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
    const p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    p.add("(min-width: 992px)", ()=>{
        const panels = document.querySelectorAll('.pp-top-wrap');
        panels.forEach((section)=>{
            tl.to(section, {
                scrollTrigger: {
                    trigger: '.pp-top-wrap',
                    pin: '.pp-about-me-area',
                    scrub: 1,
                    start: 'top 0',
                    end: "bottom 0%",
                    endTrigger: '.pp-top-wrap',
                    pinSpacing: false,
                    markers: false
                }
            });
        });
    });
}
function innerServiceAnimation() {
    const sr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    sr.add("(min-width: 992px)", ()=>{
        const tl_ser = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
        const panels = document.querySelectorAll('.tp-inner-service-area');
        panels.forEach((section)=>{
            tl_ser.to(section, {
                scrollTrigger: {
                    trigger: '.tp-inner-service-area',
                    pin: '.inner-service-1-left',
                    scrub: 1,
                    start: 'top 80px',
                    end: "bottom 100%",
                    endTrigger: '.tp-inner-service-area',
                    pinSpacing: false,
                    markers: false
                }
            });
        });
    });
}
function careerAnimation() {
    const cr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    cr.add("(min-width: 1200px)", ()=>{
        const tl_ser = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
        const panels = document.querySelectorAll('.tp-career-details-ptb');
        panels.forEach((section)=>{
            tl_ser.to(section, {
                scrollTrigger: {
                    trigger: '.tp-career-details-wrapper',
                    pin: '.tp-career-details-sidebar',
                    scrub: 1,
                    start: 'top 80px',
                    end: "bottom 100%",
                    endTrigger: '.tp-career-details-ptb',
                    pinSpacing: false,
                    markers: false
                }
            });
        });
    });
}
const buttonBounceAnimation = ()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(".tp-bounce", {
        y: -80,
        opacity: 0
    });
    const mybtn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".tp-bounce");
    mybtn.forEach((btn)=>{
        const tp_delay_value = btn.getAttribute("data-delay") || 1;
        const triggerElement = btn.closest(".tp-bounce-trigger");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btn, {
            scrollTrigger: {
                trigger: triggerElement,
                start: "top center",
                markers: false
            },
            duration: 1.5,
            delay: tp_delay_value,
            ease: "bounce.out",
            y: 0,
            opacity: 1
        });
    });
};
const PortfolioSlicerAnimation = ()=>{
    if (window.innerWidth >= 1200) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set('.tp-portfolio-slicer-wrap .pro-img-1 img', {
            x: 500
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set('.tp-portfolio-slicer-wrap .pro-img-2 img', {
            x: -500
        });
        const portfolioWraps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray('.tp-portfolio-slicer-wrap');
        portfolioWraps.forEach((wrap)=>{
            // Animate first image
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(wrap.querySelector('.pro-img-1 img'), {
                x: 0,
                scrollTrigger: {
                    trigger: wrap,
                    start: 'top 70%',
                    end: 'bottom 30%',
                    scrub: 1,
                    markers: false
                }
            });
            // Animate second image
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(wrap.querySelector('.pro-img-2 img'), {
                x: 0,
                scrollTrigger: {
                    trigger: wrap,
                    start: 'top 70%',
                    end: 'bottom 30%',
                    scrub: 1
                }
            });
        });
    }
};
const portfolioShowcaseAnimation = ()=>{
    const pr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
    pr.add("(min-width: 767px)", ()=>{
        const otherSections = document.querySelectorAll('.showcase-portfolio-panel');
        otherSections.forEach((section)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(otherSections, {
                scale: 1
            });
            tl.to(section, {
                scale: .8,
                scrollTrigger: {
                    trigger: section,
                    pin: section,
                    scrub: 1,
                    start: 'top 5%',
                    end: "bottom 100%",
                    endTrigger: '.showcase-portfolio-wrap',
                    pinSpacing: false,
                    markers: false
                }
            });
        });
    });
};
const contactBgAnimation = ()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(".tp-gsap-bg", {
        scaleX: 1
    });
    const mm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    mm.add("(min-width:1400px)", ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".tp-gsap-bg", {
            scrollTrigger: {
                trigger: ".tp-gsap-bg",
                scrub: 0.2,
                start: "top 90%",
                end: "bottom 100%"
            },
            scaleX: 0.85,
            borderRadius: "60px",
            transformOrigin: "center center",
            ease: "none"
        });
    });
};
const scrollMovingText = ()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray('.moving-text').forEach((section, index)=>{
        const w = section.querySelector('.wrapper-text');
        if (!w) return;
        const [x, xEnd] = index % 2 ? [
            section.offsetWidth - w.scrollWidth,
            0
        ] : [
            0,
            section.offsetWidth - w.scrollWidth
        ];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(w, {
            x
        }, {
            x: xEnd,
            scrollTrigger: {
                trigger: section,
                scrub: 0.1,
                invalidateOnRefresh: true
            }
        });
    });
};
const portfolioAnimation = ()=>{
    const otherSections = document.querySelectorAll('.des-portfolio-panel');
    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
    otherSections.forEach((section)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(otherSections, {
            scale: 1
        });
        tl.to(section, {
            scale: .8,
            scrollTrigger: {
                trigger: section,
                pin: section,
                scrub: 1,
                start: 'top 0',
                end: "bottom 60%",
                endTrigger: '.des-portfolio-wrap',
                pinSpacing: false,
                markers: false
            }
        });
    });
};
const designProjectAnimation = ()=>{
    const pw = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    pw.add("(min-width: 991px)", ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set('.design-project-thumb.item-1', {
            x: 400,
            rotate: 10
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set('.design-project-thumb.item-2', {
            x: -400,
            rotate: -10
        });
        document.querySelectorAll('.design-project-item').forEach((item)=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                scrollTrigger: {
                    trigger: item,
                    start: 'top 100%',
                    end: 'bottom center',
                    scrub: 1
                }
            });
            tl.to(item.querySelector('.design-project-thumb.item-1'), {
                x: 0,
                rotate: 0
            }).to(item.querySelector('.design-project-thumb.item-2'), {
                x: 0,
                rotate: 0
            }, 0);
        });
    });
};
const portfolioItemPinAnimation = ()=>{
    const pi = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    pi.add("(min-width: 1200px)", ()=>{
        document.querySelectorAll('.tp-pd-3-portfolio-item-wrap').forEach((group)=>{
            const panels = group.querySelectorAll('.tp-pd-3-portfolio-item');
            const pinTarget = group.querySelector('.tp-pd-3-content-pin');
            panels.forEach((section)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                    trigger: section,
                    pin: pinTarget,
                    start: 'top 20%',
                    end: 'bottom center',
                    scrub: 1,
                    pinSpacing: false,
                    markers: false
                });
            });
        });
    });
};
const scrollAnimation = ()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia().add("(min-width: 991px)", ()=>{
        document.querySelectorAll(".img-box").forEach((box)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(box.querySelectorAll('.tp-top-bottom-scroll'), {
                yPercent: 20
            }, {
                yPercent: -26,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: box,
                    start: "top 100%",
                    end: "bottom top",
                    scrub: true,
                    markers: false
                }
            });
        });
    });
};
const projectDetailsAnim = ()=>{
    const mm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    mm.add("(min-width: 1200px)", ()=>{
        if (document.querySelector(".project-details-2-area")) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: ".project-details-2-area",
                start: "top top",
                end: "bottom -100%",
                pin: ".project-details-video",
                pinSpacing: false
            });
        }
    });
};
const perspectiveAnim = ()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set('.tp-perspective-slider .tp-perspective-main .tp-perspective-inner', {
        perspective: 60
    });
    document.querySelectorAll('.tp-perspective-slider .tp-perspective-main .tp-perspective-inner .tp-perspective-image').forEach((slide)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(slide, {
            rotationX: 1.8,
            scaleX: 1,
            z: '0vh'
        }, {
            rotationX: -0.5,
            scaleX: 1,
            z: '-2vh',
            scrollTrigger: {
                trigger: slide,
                start: "top+=150px bottom",
                end: "bottom top",
                immediateRender: false,
                scrub: 0.1
            }
        });
    });
};
const brandImgAnim = ()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(".tp-brand-inner-item img", {
        scale: 1.3,
        opacity: 0
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".tp-brand-inner-item img", {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "bounce.out",
        stagger: {
            each: 0.1
        },
        scrollTrigger: {
            trigger: '.tp-brand-inner-area',
            start: "top 100%"
        }
    });
};
}),
"[project]/src/utils/ParallaxSlider.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// export function parallaxSlider() {
//   const images: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>('.parallax-img'));
//   const slider = document.querySelector('.parallax-sliders') as HTMLElement;
//   const sliderWrapper = document.querySelector('.parallax-slider-wrapper') as HTMLElement;
//   let sliderWidth: number;
//   let imageWidth: number;
//   let current = 0;
//   let target = 0;
//   const ease = 0.05;
//   window.addEventListener('resize', init);
//   images.forEach((img, idx) => { 
//     img.style.backgroundImage = `url(/assets/img/project-slider-img/portfolio-slider-5/port-${idx + 1}.jpg)`;
//   });
//   // Add wheel event listener
//   sliderWrapper.addEventListener('wheel', (e) => {
//     e.preventDefault();
//     target += e.deltaY * 0.5;
//     // Limit target to valid range
//     target = Math.max(0, target);
//     target = Math.min(sliderWidth - window.innerWidth, target);
//   });
//   function lerp(start: number, end: number, t: number): number {
//     return start * (1 - t) + end * t;
//   }
//   function setTransform(el: HTMLElement, transform: string) {
//     el.style.transform = transform;
//   }
//   function init() {
//     sliderWidth = slider.getBoundingClientRect().width;
//     imageWidth = sliderWidth / images.length;
//     document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`;
//   }
//   function animate() {
//     current = parseFloat(lerp(current, target, ease).toFixed(2));
//     setTransform(slider, `translateX(-${current}px)`);
//     animateImages();
//     requestAnimationFrame(animate);
//   }
//   function animateImages() {
//     const ratio = current / imageWidth;
//     let intersectionRatioValue: number;
//     images.forEach((image, idx) => {
//       intersectionRatioValue = ratio - (idx * 0.7);
//       setTransform(image, `translateX(${intersectionRatioValue * 100}px)`);
//     });
//   }
//   init();
//   animate();
// }
__turbopack_context__.s([
    "parallaxSlider",
    ()=>parallaxSlider
]);
function parallaxSlider() {
    // Check if we're in browser environment
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const images = undefined;
    const slider = undefined;
    const sliderWrapper = undefined;
    let sliderWidth;
    let imageWidth;
    let current;
    let target;
    const ease = undefined;
    function lerp(start, end, t) {
        return start * (1 - t) + end * t;
    }
    function setTransform(el, transform) {
        el.style.transform = transform;
    }
    function init() {
        sliderWidth = slider.getBoundingClientRect().width;
        imageWidth = sliderWidth / images.length;
        document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`;
    }
    function animate() {
        current = parseFloat(lerp(current, target, ease).toFixed(2));
        setTransform(slider, `translateX(-${current}px)`);
        animateImages();
        requestAnimationFrame(animate);
    }
    function animateImages() {
        const ratio = current / imageWidth;
        let intersectionRatioValue;
        images.forEach((image, idx)=>{
            intersectionRatioValue = ratio - idx * 0.7;
            setTransform(image, `translateX(${intersectionRatioValue * 100}px)`);
        });
    }
}
}),
"[project]/src/utils/titleAnimation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bounceAnimation",
    ()=>bounceAnimation,
    "textBounceAnimation",
    ()=>textBounceAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/SplitText.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jquery/dist/jquery.js [app-ssr] (ecmascript)");
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplitText"]);
// bounce animation
function bounceAnimation() {
    const bounceElements = document.querySelectorAll(".tp-btn-bounce");
    if (bounceElements.length > 0) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(".tp-btn-bounce", {
            y: -100,
            opacity: 0
        });
        const buttons = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.toArray(".tp-btn-bounce");
        buttons.forEach((btn)=>{
            const $btn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(btn);
            const triggerElement = $btn.closest(".tp-btn-trigger").get(0);
            const delayValue = parseFloat(btn.dataset.delay || "1");
            if (!triggerElement) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(btn, {
                scrollTrigger: {
                    trigger: triggerElement,
                    start: "top center",
                    markers: false
                },
                duration: 1.5,
                delay: delayValue,
                ease: "bounce.out",
                y: 0,
                opacity: 1
            });
        });
    }
}
function textBounceAnimation() {
    const triggerElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('.tp-text-bounce-trigger');
    if (triggerElements.length > 0) {
        // Set initial state
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(".tp-text-bounce", {
            y: 100,
            opacity: 0
        });
        // Get all bounce elements with proper typing
        const bounceElements = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.toArray(".tp-text-bounce");
        bounceElements.forEach((btn)=>{
            const $btn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(btn);
            const triggerElement = $btn.closest('.tp-text-bounce-trigger').get(0);
            const delayValue = parseFloat($btn.attr("data-delay") || "0.15");
            // Safety check for trigger element
            if (!triggerElement) return;
            // Create the animation
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(btn, {
                scrollTrigger: {
                    trigger: triggerElement,
                    start: "top center",
                    markers: false
                },
                duration: 1,
                delay: delayValue,
                ease: "back.out(1.7)",
                y: 0,
                opacity: 1
            });
        });
    }
}
;
}),
"[project]/src/config/animationConfig.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animationConfig",
    ()=>animationConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useGsapAnimation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$ParallaxSlider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/ParallaxSlider.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$titleAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/titleAnimation.ts [app-ssr] (ecmascript)");
;
;
;
const animationConfig = {
    //home page animation
    "/": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["funfactPanelAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonBounceAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["servicePanelAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$titleAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textBounceAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animationParagraph"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$titleAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bounceAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textInvertAnim1"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["videoAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["panelAnimation"]
    ],
    //design studio page
    "/design-studio": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["heroAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollMovingText"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["portfolioAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textInvertAnim3"]
    ],
    //digital marketing page
    "/digital-marketing": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zoomInAnimation"]
    ],
    //design agency page
    "/design agency": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textRightScrollAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designChooseAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designProjectAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designAwardAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["revalEffectAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["videoAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textInvertAnim2"]
    ],
    //creative agency page
    "/creative-agency": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textPerspectiveAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studioProjectAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textRevealAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animationParagraph"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollMovingText"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teamAnimation"]
    ],
    //unique-ai-image page
    "/unique-ai-image": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animationParagraph"]
    ],
    //corporate agency page
    "/corporate-agency": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zoomInAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollMovingText"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["panelAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eyeAnimation"]
    ],
    //mobile application page
    "/mobile-application": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["panelPinAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gsapBackgroundAnim"]
    ],
    //IT solution page
    "/it-solution": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animationParagraph"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitTextAnimation"]
    ],
    //crypto currency page
    "/cryptocurrency": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animationParagraph"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textRevealAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zoomInAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["heroBgAnimation"]
    ],
    //startup agency page
    "/startup-agency": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animationParagraph"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textRevealAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["portfolioTitleAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ctaAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonBounceAnimation"]
    ],
    //fashion studio page
    "/fashion-studio": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["imageRevealAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["portfolioProjectAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zoomInAnimation"]
    ],
    //personal portfolio page
    "/personal-portfolio": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animationParagraph"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textRevealAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupTextHoverEffect"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitTextAnimation"]
    ],
    //personal portfolio page
    "/shop-modern": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productBannerAnimation"]
    ],
    //portfolio webgl showcase page
    "/portfolio-webgl-showcase": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$ParallaxSlider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parallaxSlider"]
    ],
    //portfolio perspective slider page
    "/portfolio-perspective-slider-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["revalEffectAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["perspectiveAnim"]
    ],
    //portfolio horizontal showcase page
    "/portfolio-horizontal-showcase-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$ParallaxSlider$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parallaxSlider"]
    ],
    //portfolio slicer page
    "/portfolio-slicer-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PortfolioSlicerAnimation"]
    ],
    //portfolio showcase page
    "/portfolio-showcase-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["portfolioShowcaseAnimation"]
    ],
    //portfolio showcase page
    "/brand-showcase-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brandImgAnim"]
    ],
    //about me page
    "/about-me-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupTextHoverEffect"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animationParagraph"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PPAboutAnimation"]
    ],
    //about me page
    "/about-us-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["funfactPanelAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$titleAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textBounceAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["panelAnimation"]
    ],
    //about modern page
    "/about-modern-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollMovingText"]
    ],
    //about creative page
    "/about-creative-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textRevealAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animationParagraph"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollMovingText"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zoomInAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teamAnimation"]
    ],
    //about startup page
    "/about-startup-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["panelAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eyeAnimation"]
    ],
    //service-1 page
    "/service-1-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textPerspectiveAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["innerServiceAnimation"]
    ],
    //service-2 page
    "/service-2-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["servicePanelAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["innerServiceAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["panelAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["videoAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textInvertAnim1"]
    ],
    //service-3 page
    "/service-3-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollMovingText"]
    ],
    //service-4 page
    "/service-4-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["imageRevealAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollMovingText"]
    ],
    //service-details page
    "/service-details-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["imageRevealAnimation"]
    ],
    //service-details-2 page
    "/service-details-2-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["imageRevealAnimation"]
    ],
    //career-details page
    "/career-details-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["careerAnimation"]
    ],
    //team page
    "/team-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonBounceAnimation"]
    ],
    //portfolio metro page
    "/portfolio-metro-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textRightScrollAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["designProjectAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["revalEffectAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollMovingText"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textInvertAnim2"]
    ],
    //portfolio metro page
    "/portfolio-pinterest-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textPerspectiveAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studioProjectAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textRevealAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["videoAnimation"]
    ],
    //portfolio details creative slider page
    "/portfolio-details-creative-slider-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["portfolioItemPinAnimation"]
    ],
    //portfolio details creative slider page
    "/portfolio-details-modern-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textRightScrollAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrollAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textInvertAnim2"]
    ],
    //portfolio details video page
    "/portfolio-details-video-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectDetailsAnim"]
    ],
    //shop with slider page
    "/shop-with-slider-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productBannerAnimation"]
    ],
    //contact me page
    "/contact-me-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupTextHoverEffect"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animationParagraph"]
    ],
    //contact me page
    "/contact": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contactBgAnimation"]
    ]
};
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/components/shared/Animation/AnimationWrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$animationConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/animationConfig.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useGsapAnimation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const AnimationWrapper = ({ children })=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        const timer = setTimeout(()=>{
            // Global animations (always run)
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fadeAnimation"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["charAnimation"])();
            // Page-specific animations
            if (pathname) {
                const pageAnimations = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$animationConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animationConfig"][pathname];
                if (pageAnimations && Array.isArray(pageAnimations)) {
                    pageAnimations.forEach((fn)=>fn());
                }
            }
        }, 100);
        return ()=>clearTimeout(timer);
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
};
const __TURBOPACK__default__export__ = AnimationWrapper;
}),
"[project]/src/hooks/useScrollSmooth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { useGSAP } from "@gsap/react";
// import { useState } from "react";
// import { gsap } from "gsap";
// export default function useScrollSmooth() {
//   const [isScrollSmooth] = useState<boolean>(true);
//   useGSAP(() => {
//     // Register plugins
//     gsap.registerPlugin(ScrollSmoother);
//     const smoothWrapper = document.getElementById("smooth-wrapper");
//     const smoothContent = document.getElementById("smooth-content");
//     if (smoothWrapper && smoothContent && isScrollSmooth) {
//       gsap.config({
//         nullTargetWarn: false,
//       });
//       ScrollSmoother.create({
//         smooth: 2,
//         effects: true,
//         smoothTouch: 0.1,
//         normalizeScroll: false,
//         ignoreMobileResize: true,
//       });
//     }
//   }, [isScrollSmooth]);
// }
__turbopack_context__.s([
    "default",
    ()=>useScrollSmooth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollSmoother$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollSmoother.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
function useScrollSmooth() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        // Register plugins
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollSmoother$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollSmoother"]);
        const smoothWrapper = document.getElementById("smooth-wrapper");
        const smoothContent = document.getElementById("smooth-content");
        if (!smoothWrapper || !smoothContent) return;
        const isDesktop = window.innerWidth >= 768;
        if (isDesktop) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollSmoother$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollSmoother"].create({
                wrapper: smoothWrapper,
                content: smoothContent,
                smooth: 2,
                effects: true,
                smoothTouch: 0.3,
                normalizeScroll: true,
                ignoreMobileResize: false
            });
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].config({
                nullTargetWarn: false
            });
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
            trigger: ".shape",
            pin: true,
            start: "center center",
            end: "+=300",
            markers: false
        });
        const handleResize = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
        };
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
}
}),
"[project]/src/components/provider/ScrollSmoothProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollSmoothProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollSmooth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useScrollSmooth.ts [app-ssr] (ecmascript)");
"use client";
;
;
function ScrollSmoothProvider({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollSmooth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/src/svg/ArrowIcons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowEight",
    ()=>ArrowEight,
    "ArrowEightteen",
    ()=>ArrowEightteen,
    "ArrowEleven",
    ()=>ArrowEleven,
    "ArrowFifteen",
    ()=>ArrowFifteen,
    "ArrowFive",
    ()=>ArrowFive,
    "ArrowFour",
    ()=>ArrowFour,
    "ArrowFourteen",
    ()=>ArrowFourteen,
    "ArrowHeroIcon",
    ()=>ArrowHeroIcon,
    "ArrowNextPrevIcon",
    ()=>ArrowNextPrevIcon,
    "ArrowNine",
    ()=>ArrowNine,
    "ArrowNineteen",
    ()=>ArrowNineteen,
    "ArrowSeven",
    ()=>ArrowSeven,
    "ArrowSeventeen",
    ()=>ArrowSeventeen,
    "ArrowSix",
    ()=>ArrowSix,
    "ArrowSixteen",
    ()=>ArrowSixteen,
    "ArrowSvg",
    ()=>ArrowSvg,
    "ArrowTen",
    ()=>ArrowTen,
    "ArrowThirteen",
    ()=>ArrowThirteen,
    "ArrowThree",
    ()=>ArrowThree,
    "ArrowTwelve",
    ()=>ArrowTwelve,
    "ArrowTwenty",
    ()=>ArrowTwenty,
    "ArrowTwentyEight",
    ()=>ArrowTwentyEight,
    "ArrowTwentyFive",
    ()=>ArrowTwentyFive,
    "ArrowTwentyFour",
    ()=>ArrowTwentyFour,
    "ArrowTwentyNine",
    ()=>ArrowTwentyNine,
    "ArrowTwentyOne",
    ()=>ArrowTwentyOne,
    "ArrowTwentySeven",
    ()=>ArrowTwentySeven,
    "ArrowTwentySix",
    ()=>ArrowTwentySix,
    "ArrowTwentyThree",
    ()=>ArrowTwentyThree,
    "ArrowTwentyTwo",
    ()=>ArrowTwentyTwo,
    "ArrowTwo",
    ()=>ArrowTwo,
    "BacktoTopArrow",
    ()=>BacktoTopArrow,
    "BacktoTopArrowFooter",
    ()=>BacktoTopArrowFooter,
    "BottomArrow",
    ()=>BottomArrow,
    "DownArrow",
    ()=>DownArrow,
    "DownArrowTwo",
    ()=>DownArrowTwo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const ArrowSvg = ({ width = "10", height = "10", strokeWidth = "1.5", viewBox = "0 0 10 10", pathValue = "M1 9L9 1M9 1H1M9 1V9" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: width,
            height: height,
            viewBox: viewBox,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: pathValue,
                stroke: "currentcolor",
                strokeWidth: strokeWidth,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 19,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 18,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowTwo = ({ width = "102", height = "9", viewBox = "0 0 102 9", pathValue = "M98 8L101.5 4.5L98 1M1 4H101V5H1V4Z" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: width,
            height: height,
            viewBox: viewBox,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: pathValue,
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 29,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 28,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowThree = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "6",
            height: "10",
            viewBox: "0 0 6 10",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 9L5 5L1 1",
                stroke: "currentcolor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 38,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 37,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowFour = ({ width = "12", height = "12", viewBox = "0 0 12 12", pathValue = "M1 11L11 1M11 1H1M11 1V11" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: width,
            height: height,
            viewBox: viewBox,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: pathValue,
                stroke: "currentcolor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 47,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 46,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowFive = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 11L11 1M11 1H1M11 1V11",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 56,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 55,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const BottomArrow = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.8267 7.78875V9.76887L7.58239 14.6467H7.34091V12.5579L14.8267 7.78875ZM0 7.78875L7.4858 12.5579V14.6467H7.24432L0 9.76887V7.78875ZM14.8267 0.606934V2.58705L7.58239 7.46489H7.34091V5.37611L14.8267 0.606934ZM0 0.606934L7.4858 5.37611V7.46489H7.24432L0 2.58705V0.606934Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 65,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 64,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowSix = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 16L16 2M16 2V16M16 2L2 2",
                stroke: "#17312F",
                strokeWidth: "3",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 74,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 73,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowSeven = ({ color = "#E9FF48" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "81",
            height: "81",
            viewBox: "0 0 81 81",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M77.4231 0.5H3.57692C1.87846 0.5 0.5 1.87846 0.5 3.57692C0.5 5.27538 1.87846 6.65385 3.57692 6.65385H69.9939L1.40154 75.2477C0.2 76.4492 0.2 78.3969 1.40154 79.5985C2.00308 80.2 2.78923 80.5 3.57692 80.5C4.36462 80.5 5.15231 80.2 5.75231 79.5985L74.3462 11.0046V77.4231C74.3462 79.1215 75.7246 80.5 77.4231 80.5C79.1215 80.5 80.5 79.1215 80.5 77.4231V3.57692C80.5 1.87846 79.1215 0.5 77.4231 0.5Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 83,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 82,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowEight = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "18",
            height: "20",
            viewBox: "0 0 18 20",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2.45844 0H1.04844C0.118443 0 -0.351558 1.13 0.308442 1.79L6.03844 7.52C7.67844 9.16 10.3284 9.16 11.9684 7.52L17.6984 1.79C18.3484 1.13 17.8784 0 16.9484 0H15.5384C14.7084 0 13.9084 0.33 13.3184 0.92L9.73844 4.5C9.32844 4.91 8.66844 4.91 8.25844 4.5L4.67844 0.92C4.08844 0.33 3.28844 0 2.45844 0Z",
                    fill: "#292D32"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 92,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    opacity: "0.4",
                    d: "M2.45844 19.97H1.04844C0.118443 19.97 -0.351558 18.84 0.308442 18.18L6.03844 12.45C7.67844 10.81 10.3284 10.81 11.9684 12.45L17.6984 18.18C18.3584 18.84 17.8884 19.97 16.9584 19.97H15.5484C14.7184 19.97 13.9184 19.64 13.3284 19.05L9.74844 15.47C9.33844 15.06 8.67844 15.06 8.26844 15.47L4.68844 19.05C4.08844 19.64 3.28844 19.97 2.45844 19.97Z",
                    fill: "#292D32"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 93,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 91,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowNine = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 11L11 1M11 1H1M11 1V11",
                stroke: "#21212D",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 102,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 101,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowTen = ({ strokeColor = "#21212D" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "10",
            height: "10",
            viewBox: "0 0 10 10",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 9L9 1M9 1H1M9 1V9",
                stroke: strokeColor,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 111,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 110,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowEleven = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "15",
            height: "12",
            viewBox: "0 0 15 12",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.5303 6.53033C14.8232 6.23744 14.8232 5.76256 14.5303 5.46967L9.75736 0.696699C9.46447 0.403806 8.98959 0.403806 8.6967 0.696699C8.40381 0.989592 8.40381 1.46447 8.6967 1.75736L12.9393 6L8.6967 10.2426C8.40381 10.5355 8.40381 11.0104 8.6967 11.3033C8.98959 11.5962 9.46447 11.5962 9.75736 11.3033L14.5303 6.53033ZM0 6.75H14V5.25H0V6.75Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 120,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 119,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowTwelve = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "351",
            height: "8",
            viewBox: "0 0 351 8",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M350.354 4.35355C350.549 4.15829 350.549 3.84171 350.354 3.64645L347.172 0.464466C346.976 0.269204 346.66 0.269204 346.464 0.464466C346.269 0.659728 346.269 0.976311 346.464 1.17157L349.293 4L346.464 6.82843C346.269 7.02369 346.269 7.34027 346.464 7.53553C346.66 7.7308 346.976 7.7308 347.172 7.53553L350.354 4.35355ZM0 4V4.5H350V4V3.5H0V4Z",
                fill: "currentcolor"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 129,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 128,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowThirteen = ({ width = "14", height = "14", viewBox = "0 0 14 14", pathValue = "M1 7H13", pathValueTwo = "M7 1L13 7L7 13" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: width,
            height: height,
            viewBox: viewBox,
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: pathValue,
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 138,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: pathValueTwo,
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 139,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 137,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowFourteen = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "22",
            height: "22",
            viewBox: "0 0 22 22",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.3793 3.0269C14.6433 2.80336 18.8918 1.42595 22 0C20.5735 3.10763 19.1955 7.35556 18.9725 10.6196L16.8278 6.04382L1.05218 21.82C0.936508 21.9354 0.77977 22.0001 0.616396 22C0.494507 22 0.375362 21.9638 0.274025 21.8961C0.172686 21.8284 0.0936985 21.7321 0.0470581 21.6195C0.000415802 21.5069 -0.0117893 21.383 0.0119839 21.2634C0.0357552 21.1439 0.0944386 21.034 0.180614 20.9478L15.9563 5.17221L11.3793 3.0269Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 148,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 147,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowFifteen = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M1 13L13 1",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 157,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M1 1H13V13",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 158,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 156,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowSixteen = ({ width = "73", height = "72", strokeColor = "#453030" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: width,
            height: height,
            viewBox: "0 0 73 72",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M39.7519 0.249535V59.2614L67.5 31.5133L72.4725 36.4858L38.7225 70.2358C38.0628 70.8946 37.1686 71.2646 36.2362 71.2646C35.3039 71.2646 34.4097 70.8946 33.75 70.2358L0 36.4858L4.9725 31.5133L32.7206 59.2614V0.249535H39.7519Z",
                fill: strokeColor
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 167,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 166,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowSeventeen = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "205",
            height: "209",
            viewBox: "0 0 205 209",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17.9992 110.499C79.4994 235.001 90.4995 23.4983 192.778 88.2089",
                    stroke: "#CFC292",
                    strokeWidth: "1.5"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 176,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M191.52 76.8785C188.858 81.4883 190.33 87.3118 194.811 89.8989",
                    stroke: "#CFC292",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 177,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M194.814 89.8969C190.333 87.3098 184.553 88.9466 181.892 93.5563",
                    stroke: "#CFC292",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 178,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 175,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowEightteen = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "10",
            height: "21",
            viewBox: "0 0 10 21",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.57574 20.4243C4.81005 20.6586 5.18995 20.6586 5.42426 20.4243L9.24264 16.6059C9.47696 16.3716 9.47696 15.9917 9.24264 15.7574C9.00833 15.523 8.62843 15.523 8.39411 15.7574L5 19.1515L1.60589 15.7574C1.37157 15.523 0.991674 15.523 0.757359 15.7574C0.523045 15.9917 0.523045 16.3716 0.757359 16.6059L4.57574 20.4243ZM4.4 0L4.4 20H5.6L5.6 0L4.4 0Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 187,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 186,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowNineteen = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "25",
            height: "24",
            viewBox: "0 0 25 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5.23804 17.2178L18.2428 8.11173",
                    stroke: "#141414",
                    strokeWidth: "2",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 197,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8.62744 5.00098C11.1637 8.6231 16.1444 9.50353 19.7634 6.96947",
                    stroke: "#141414",
                    strokeWidth: "2",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 198,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19.7642 6.96914C16.1452 9.5032 15.2691 14.4847 17.8053 18.1068",
                    stroke: "#141414",
                    strokeWidth: "2",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 199,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 196,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowTwenty = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "81",
            height: "9",
            viewBox: "0 0 81 9",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    y: "4",
                    width: "80",
                    height: "1",
                    fill: "#111013"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 208,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M77 7.96366L80.5 4.48183L77 1",
                    stroke: "#111013",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 209,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 207,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowNextPrevIcon = ({ direction = 'right', strokeColor = 'white' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: direction === 'right' ? "M1 13L7 7L1 1" : "M7 1L1 7L7 13",
            stroke: strokeColor,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 217,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/svg/ArrowIcons.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ArrowTwentyOne = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2.41379 3.30208C5.97452 3.05821 10.6092 1.55558 14 0C12.4438 3.39014 10.9406 8.02425 10.6973 11.585L8.35796 6.59396L1.14867 13.8038C1.02249 13.9296 0.851498 14.0003 0.673273 14.0001C0.540303 14.0001 0.410328 13.9606 0.299776 13.8867C0.189224 13.8129 0.103059 13.7079 0.0521774 13.585C0.00129604 13.4622 -0.0120192 13.327 0.0139141 13.1966C0.0398474 13.0661 0.103867 12.9463 0.197876 12.8523L7.40747 5.64271L2.41379 3.30208Z",
                fill: "#030303"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 231,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 230,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowTwentyTwo = ({ direction = "right" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "101",
            height: "9",
            viewBox: "0 0 101 9",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    width: "100",
                    height: "1",
                    transform: "matrix(-1 0 0 1 101 4.01807)",
                    fill: "#111013"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 240,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: direction === "right" ? "M4 7.98173L0.5 4.4999L4 1.01807" : "M97 7.98173L100.5 4.4999L97 1.01807",
                    stroke: "#111013",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 241,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 239,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowTwentyThree = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "82",
            height: "9",
            viewBox: "0 0 82 9",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M78 7.95425L81.5 4.47169L78 0.989136M1 3.98977H81V4.98977H1V3.98977Z",
                stroke: "#FF5722",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 250,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 249,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowTwentyFour = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "13",
            height: "13",
            viewBox: "0 0 13 13",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.5 1V12M6.5 12L12 6.5M6.5 12L1 6.5",
                stroke: "black",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 259,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 258,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowTwentyFive = ({ width = "732" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: width,
            height: "9",
            viewBox: "0 0 732 9",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M728 7.96512L731.5 4.48256L728 1M1 4H731V5H1V4Z",
                stroke: "#000",
                strokeOpacity: "0.8",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 268,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 267,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowTwentySix = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "102",
            height: "9",
            viewBox: "0 0 102 9",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M98 8L101.5 4.5L98 1M1 4H101V5H1V4Z",
                stroke: "currentcolor",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 277,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 276,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowTwentySeven = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "15",
            height: "21",
            viewBox: "0 0 15 21",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "6.25781",
                    width: "1.5",
                    height: "21",
                    fill: "#000"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 286,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14.1641 13.6257C10.28 13.6257 7.13714 16.9239 7.13714 21",
                    stroke: "#000",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 287,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7.13672 21C7.13672 16.9239 3.99384 13.6257 0.109797 13.6257",
                    stroke: "#000",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 288,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 285,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowTwentyEight = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "20",
            viewBox: "0 0 18 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 9.99999H15.2222M8.11121 1.11108L17.0001 9.99997L8.11121 18.8889",
                stroke: "currentcolor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 297,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 296,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowTwentyNine = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "13",
            height: "14",
            viewBox: "0 0 13 14",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0.250745 12.3137C0.250745 12.7279 0.586531 13.0637 1.00074 13.0637H7.75074C8.16496 13.0637 8.50074 12.7279 8.50074 12.3137C8.50074 11.8995 8.16496 11.5637 7.75074 11.5637L1.75074 11.5637L1.75074 5.56371C1.75074 5.14949 1.41496 4.81371 1.00074 4.81371C0.586531 4.81371 0.250745 5.14949 0.250745 5.56371V12.3137ZM12.3145 1L11.7841 0.46967L0.470415 11.7834L1.00074 12.3137L1.53107 12.844L12.8448 1.53033L12.3145 1Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 306,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 305,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ArrowHeroIcon = ({ direction = "right" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "22",
            viewBox: "0 0 12 22",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: direction === 'right' ? "M1 21L11 11L1 1" : "M11 21L1 11L11 1",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 315,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 314,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const DownArrow = ({ width = "18", height = "18", path = "M1 1L17 17", pathTwo = "M17 1V17H1" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: width,
            height: height,
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: path,
                    stroke: "white",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 325,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: pathTwo,
                    stroke: "white",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 326,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 324,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const DownArrowTwo = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.99999 1V19M9.99999 19L1 10M9.99999 19L19 10",
                stroke: "black",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 335,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 334,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const BacktoTopArrowFooter = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "20",
            viewBox: "0 0 16 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 19V1M8 1L1 8M8 1L15 8",
                stroke: "currentcolor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 345,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 344,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const BacktoTopArrow = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "12",
            height: "7",
            viewBox: "0 0 12 7",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11 6L6 1L1 6",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/ArrowIcons.tsx",
                lineNumber: 360,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ArrowIcons.tsx",
            lineNumber: 353,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
}),
"[project]/src/components/contacts/ContactFormArea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$ArrowIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/ArrowIcons.tsx [app-ssr] (ecmascript)");
"use client";
;
;
const ContactFormArea = ()=>{
    const handleSubmit = (e)=>{
        e.preventDefault();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tp-contact-form-ptb pb-100 pt-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container container-1230",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tp-contact-form-heading tp_fade_anim mb-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ar-about-us-4-title-box d-flex align-items-center mb-15",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tp-section-subtitle pre",
                                            children: "Contact Us"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                            lineNumber: 16,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ar-about-us-4-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$ArrowIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowTwenty"], {}, void 0, false, {
                                                fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                lineNumber: 18,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                            lineNumber: 17,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                    lineNumber: 15,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "tp-section-title lts",
                                    children: [
                                        `Let's`,
                                        " make ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                            lineNumber: 21,
                                            columnNumber: 81
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "your brand ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                            lineNumber: 22,
                                            columnNumber: 44
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "brilliant!"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                    lineNumber: 21,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                            lineNumber: 14,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                        lineNumber: 13,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tp-contact-form-wrap",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                id: "contact-form",
                                onSubmit: handleSubmit,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-lg-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tp-contact-form-input mb-20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: "Full name*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                        lineNumber: 32,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "name",
                                                        type: "text"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                        lineNumber: 33,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                lineNumber: 31,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                            lineNumber: 30,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-lg-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tp-contact-form-input mb-20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: "Email address*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "email",
                                                        type: "email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                        lineNumber: 39,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                lineNumber: 37,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                            lineNumber: 36,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-lg-12",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tp-contact-form-input mb-20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: "Website link"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                        lineNumber: 44,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "subject",
                                                        type: "text"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                        lineNumber: 45,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                lineNumber: 43,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                            lineNumber: 42,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-lg-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "tp-contact-form-input mb-20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            children: "How Can We Help You*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                            lineNumber: 50,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            name: "message"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                            lineNumber: 52,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "tp-contact-form-btn",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "w-100 theme-btn-color",
                                                            type: "submit",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-1",
                                                                        children: "Send Message"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                                        lineNumber: 57,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-2",
                                                                        children: "Send Message"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                                        lineNumber: 58,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                                lineNumber: 56,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                            lineNumber: 55,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "ajax-response mt-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                            lineNumber: 61,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                            lineNumber: 48,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                    lineNumber: 29,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                lineNumber: 28,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                            lineNumber: 27,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                        lineNumber: 26,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                lineNumber: 12,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
            lineNumber: 11,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ContactFormArea;
}),
"[project]/src/components/shared/BackToTop/BackToTop.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$ArrowIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/ArrowIcons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function BackToTop() {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            // Show button after scrolling down 200px
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);
        // Cleanup function
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `back-to-top-wrapper ${isVisible ? 'back-to-top-btn-show' : ''}`,
        onClick: scrollToTop,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            id: "back_to_top",
            type: "button",
            className: "back-to-top-btn",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$ArrowIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BacktoTopArrow"], {}, void 0, false, {
                fileName: "[project]/src/components/shared/BackToTop/BackToTop.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/shared/BackToTop/BackToTop.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/shared/BackToTop/BackToTop.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/public/assets/img/cartaloop/logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/logo.c7ac2606.png");}),
"[project]/public/assets/img/cartaloop/logo.png.mjs { IMAGE => \"[project]/public/assets/img/cartaloop/logo.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$cartaloop$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/img/cartaloop/logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$cartaloop$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 131,
    height: 17,
    blurWidth: 8,
    blurHeight: 1,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAHklEQVR42mNgYGDQAGJjIDYBYh0glgNiPSA2AGIzABUeAW6v5TVHAAAAAElFTkSuQmCC"
};
}),
"[project]/public/assets/img/offcanvas/offcanvas-1.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/offcanvas-1.fb99b14e.jpg");}),
"[project]/public/assets/img/offcanvas/offcanvas-1.jpg.mjs { IMAGE => \"[project]/public/assets/img/offcanvas/offcanvas-1.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/img/offcanvas/offcanvas-1.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 500,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAASUlEQVR42pWOQQrAQAgD/bwIioL4GVv6uAYXeijsYecQEgMSejbQtujua7iHLxIzR4SZQTMTxt2hJCI2oKgqVV3x/2p5HOl41QtYK4NrHRi9YgAAAABJRU5ErkJggg=="
};
}),
"[project]/public/assets/img/offcanvas/offcanvas-2.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/offcanvas-2.fb99b14e.jpg");}),
"[project]/public/assets/img/offcanvas/offcanvas-2.jpg.mjs { IMAGE => \"[project]/public/assets/img/offcanvas/offcanvas-2.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/img/offcanvas/offcanvas-2.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 500,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAASUlEQVR42pWOQQrAQAgD/bwIioL4GVv6uAYXeijsYecQEgMSejbQtujua7iHLxIzR4SZQTMTxt2hJCI2oKgqVV3x/2p5HOl41QtYK4NrHRi9YgAAAABJRU5ErkJggg=="
};
}),
"[project]/public/assets/img/offcanvas/offcanvas-3.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/offcanvas-3.fb99b14e.jpg");}),
"[project]/public/assets/img/offcanvas/offcanvas-3.jpg.mjs { IMAGE => \"[project]/public/assets/img/offcanvas/offcanvas-3.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$3$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/img/offcanvas/offcanvas-3.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$3$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 500,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAASUlEQVR42pWOQQrAQAgD/bwIioL4GVv6uAYXeijsYecQEgMSejbQtujua7iHLxIzR4SZQTMTxt2hJCI2oKgqVV3x/2p5HOl41QtYK4NrHRi9YgAAAABJRU5ErkJggg=="
};
}),
"[project]/public/assets/img/offcanvas/offcanvas-4.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/offcanvas-4.fb99b14e.jpg");}),
"[project]/public/assets/img/offcanvas/offcanvas-4.jpg.mjs { IMAGE => \"[project]/public/assets/img/offcanvas/offcanvas-4.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$4$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/img/offcanvas/offcanvas-4.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$4$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 500,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAASUlEQVR42pWOQQrAQAgD/bwIioL4GVv6uAYXeijsYecQEgMSejbQtujua7iHLxIzR4SZQTMTxt2hJCI2oKgqVV3x/2p5HOl41QtYK4NrHRi9YgAAAABJRU5ErkJggg=="
};
}),
"[project]/public/assets/img/logo/logo-black.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/logo-black.56366fc5.png");}),
"[project]/public/assets/img/logo/logo-black.png.mjs { IMAGE => \"[project]/public/assets/img/logo/logo-black.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$logo$2f$logo$2d$black$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/img/logo/logo-black.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$logo$2f$logo$2d$black$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 400,
    height: 95,
    blurWidth: 8,
    blurHeight: 2,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAR0lEQVR42g3KsQnAMAxEURdCEtIs2SFNIF4ggUCKVJnAhRdw46X9i8fB8UtEdHf/VfVkH7xmdqOKyFYyc2ByXMSN4CM+sKMu62oHKeSpLzAAAAAASUVORK5CYII="
};
}),
"[project]/public/assets/img/logo/logo-white.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/logo-white.5460c911.png");}),
"[project]/public/assets/img/logo/logo-white.png.mjs { IMAGE => \"[project]/public/assets/img/logo/logo-white.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$logo$2f$logo$2d$white$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/assets/img/logo/logo-white.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$logo$2f$logo$2d$white$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 241,
    height: 57,
    blurWidth: 8,
    blurHeight: 2,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR42gFCAL3/AIqKinlwcHBnVFRUSGZmZlpnZ2dcZmZmV1paWkk5OTktAJSUlIeVlZWLY2NjVoeHh3ZtbW1hUVFRRU5OTkFWVlZJWxgZVfKhGu4AAAAASUVORK5CYII="
};
}),
"[project]/src/components/shared/PhotoProviderWrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$photo$2d$view$2f$dist$2f$react$2d$photo$2d$view$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-photo-view/dist/react-photo-view.module.js [app-ssr] (ecmascript)");
"use client";
;
;
const PhotoProviderWrapper = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$photo$2d$view$2f$dist$2f$react$2d$photo$2d$view$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhotoProvider"], {
        speed: ()=>800,
        easing: (type)=>type === 2 ? "cubic-bezier(0.1, 0.1, 0.25, 1)" : "cubic-bezier(0.1, 0.1, 0.25, 1)",
        maskOpacity: 0.7,
        photoClosable: true,
        overlayRender: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    backgroundColor: 'rgba(0,0,0,0.7)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/shared/PhotoProviderWrapper.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, void 0),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/shared/PhotoProviderWrapper.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = PhotoProviderWrapper;
}),
"[project]/src/svg/StarIcons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrandStarIcon",
    ()=>BrandStarIcon,
    "StarIcon",
    ()=>StarIcon,
    "StarIconEight",
    ()=>StarIconEight,
    "StarIconFive",
    ()=>StarIconFive,
    "StarIconFour",
    ()=>StarIconFour,
    "StarIconSeven",
    ()=>StarIconSeven,
    "StarIconSix",
    ()=>StarIconSix,
    "StarIconThree",
    ()=>StarIconThree,
    "StarIconTwo",
    ()=>StarIconTwo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const StarIcon = ({ width = "14", height = "13", color = "currentColor" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: width,
            height: height,
            viewBox: "0 0 14 13",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.99993 0L8.98311 4.27038L13.6573 4.83688L10.2088 8.04262L11.1144 12.6631L6.99993 10.374L2.88543 12.6631L3.79106 8.04262L0.342529 4.83688L5.01674 4.27038L6.99993 0Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/svg/StarIcons.tsx",
                lineNumber: 14,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/StarIcons.tsx",
            lineNumber: 13,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const StarIconTwo = ({ width = "16", height = "15", color = "currentColor" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: width,
            height: height,
            viewBox: "0 0 16 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.99999 0L9.7961 5.52786H15.6084L10.9062 8.94427L12.7023 14.4721L7.99999 11.0557L3.29771 14.4721L5.09382 8.94427L0.391541 5.52786H6.20388L7.99999 0Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/svg/StarIcons.tsx",
                lineNumber: 23,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/StarIcons.tsx",
            lineNumber: 22,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const StarIconThree = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "13",
            viewBox: "0 0 14 13",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 0L8.6458 4.73475L13.6574 4.83688L9.66296 7.86525L11.1145 12.6631L7 9.8L2.8855 12.6631L4.33704 7.86525L0.342604 4.83688L5.3542 4.73475L7 0Z",
                fill: "#EF2B10"
            }, void 0, false, {
                fileName: "[project]/src/svg/StarIcons.tsx",
                lineNumber: 32,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/StarIcons.tsx",
            lineNumber: 31,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const StarIconFour = ({ width = "18", height = "17" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: width,
            height: height,
            viewBox: "0 0 18 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.99994 0L11.0206 6.21885H17.5594L12.2694 10.0623L14.29 16.2812L8.99994 12.4377L3.70987 16.2812L5.7305 10.0623L0.44043 6.21885H6.97931L8.99994 0Z",
                fill: "#FFCF27"
            }, void 0, false, {
                fileName: "[project]/src/svg/StarIcons.tsx",
                lineNumber: 41,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/StarIcons.tsx",
            lineNumber: 40,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const StarIconFive = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "19",
            height: "20",
            viewBox: "0 0 19 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M15.5728 1.05275C15.4917 0.72789 15.1998 0.5 14.8649 0.5C14.5301 0.5 14.2382 0.72789 14.1569 1.05275C13.9343 1.94324 13.6187 2.53851 13.1935 2.96373C12.7683 3.38895 12.173 3.70456 11.2825 3.92719C10.9577 4.0084 10.7297 4.30029 10.7297 4.63514C10.7297 4.96998 10.9577 5.26187 11.2825 5.34308C12.173 5.56571 12.7683 5.88132 13.1935 6.30654C13.6187 6.73176 13.9343 7.32703 14.1569 8.21752C14.2382 8.5424 14.5301 8.77027 14.8649 8.77027C15.1998 8.77027 15.4917 8.5424 15.5728 8.21752C15.7955 7.32703 16.111 6.73176 16.5363 6.30654C16.9615 5.88132 17.5568 5.56571 18.4473 5.34308C18.7721 5.26187 19 4.96998 19 4.63514C19 4.30029 18.7721 4.0084 18.4473 3.92719C17.5568 3.70456 16.9615 3.38895 16.5363 2.96373C16.111 2.53851 15.7955 1.94324 15.5728 1.05275Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/src/svg/StarIcons.tsx",
                    lineNumber: 50,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7.76195 5.94484C7.6808 5.61998 7.38891 5.39209 7.05402 5.39209C6.71921 5.39209 6.42732 5.61998 6.34611 5.94484C5.915 7.66931 5.28664 8.89006 4.3923 9.78438C3.49797 10.6787 2.27722 11.3071 0.552746 11.7382C0.22789 11.8195 0 12.1112 0 12.4461C0 12.781 0.22789 13.0728 0.552746 13.1541C2.27722 13.5852 3.49797 14.2135 4.3923 15.1079C5.28664 16.0023 5.915 17.223 6.34611 18.9475C6.42732 19.2723 6.71921 19.5002 7.05402 19.5002C7.38891 19.5002 7.6808 19.2723 7.76195 18.9475C8.19308 17.223 8.82142 16.0023 9.71578 15.1079C10.6101 14.2135 11.8309 13.5852 13.5553 13.1541C13.8802 13.0728 14.1081 12.781 14.1081 12.4461C14.1081 12.1112 13.8802 11.8195 13.5553 11.7382C11.8309 11.3071 10.6101 10.6787 9.71578 9.78438C8.82152 8.89006 8.19308 7.66931 7.76195 5.94484Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/src/svg/StarIcons.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/StarIcons.tsx",
            lineNumber: 49,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const StarIconSix = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "19",
            height: "20",
            viewBox: "0 0 19 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M15.5728 1.05275C15.4917 0.72789 15.1998 0.5 14.8649 0.5C14.5301 0.5 14.2382 0.72789 14.1569 1.05275C13.9343 1.94324 13.6187 2.53851 13.1935 2.96373C12.7683 3.38895 12.173 3.70456 11.2825 3.92719C10.9577 4.0084 10.7297 4.30029 10.7297 4.63514C10.7297 4.96998 10.9577 5.26187 11.2825 5.34308C12.173 5.56571 12.7683 5.88132 13.1935 6.30654C13.6187 6.73176 13.9343 7.32703 14.1569 8.21752C14.2382 8.5424 14.5301 8.77027 14.8649 8.77027C15.1998 8.77027 15.4917 8.5424 15.5728 8.21752C15.7955 7.32703 16.111 6.73176 16.5363 6.30654C16.9615 5.88132 17.5568 5.56571 18.4473 5.34308C18.7721 5.26187 19 4.96998 19 4.63514C19 4.30029 18.7721 4.0084 18.4473 3.92719C17.5568 3.70456 16.9615 3.38895 16.5363 2.96373C16.111 2.53851 15.7955 1.94324 15.5728 1.05275Z",
                    fill: "currentcolor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/StarIcons.tsx",
                    lineNumber: 60,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7.76195 5.94484C7.6808 5.61998 7.38891 5.39209 7.05402 5.39209C6.71921 5.39209 6.42732 5.61998 6.34611 5.94484C5.915 7.66931 5.28664 8.89006 4.3923 9.78438C3.49797 10.6787 2.27722 11.3071 0.552746 11.7382C0.22789 11.8195 0 12.1112 0 12.4461C0 12.781 0.22789 13.0728 0.552746 13.1541C2.27722 13.5852 3.49797 14.2135 4.3923 15.1079C5.28664 16.0023 5.915 17.223 6.34611 18.9475C6.42732 19.2723 6.71921 19.5002 7.05402 19.5002C7.38891 19.5002 7.6808 19.2723 7.76195 18.9475C8.19308 17.223 8.82142 16.0023 9.71578 15.1079C10.6101 14.2135 11.8309 13.5852 13.5553 13.1541C13.8802 13.0728 14.1081 12.781 14.1081 12.4461C14.1081 12.1112 13.8802 11.8195 13.5553 11.7382C11.8309 11.3071 10.6101 10.6787 9.71578 9.78438C8.82152 8.89006 8.19308 7.66931 7.76195 5.94484Z",
                    fill: "currentcolor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/StarIcons.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/StarIcons.tsx",
            lineNumber: 59,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const StarIconSeven = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.36067 0.5L9.63512 5.10778L14.7213 5.85121L11.041 9.43586L11.9096 14.5L7.36067 12.1078L2.81178 14.5L3.68034 9.43586L0 5.85121L5.08623 5.10778L7.36067 0.5Z",
                fill: "#FFD04F"
            }, void 0, false, {
                fileName: "[project]/src/svg/StarIcons.tsx",
                lineNumber: 70,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/StarIcons.tsx",
            lineNumber: 69,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const StarIconEight = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "23",
            height: "23",
            viewBox: "0 0 23 23",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.2821 0.446777C12.1387 6.37038 16.423 11.4762 22.2815 12.3636C16.3579 12.2203 11.2521 16.5045 10.3647 22.3631C10.5081 16.4394 6.22374 11.3336 0.365234 10.4462C6.28883 10.5896 11.3947 6.30528 12.2821 0.446777Z",
                fill: "#21212D"
            }, void 0, false, {
                fileName: "[project]/src/svg/StarIcons.tsx",
                lineNumber: 79,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/StarIcons.tsx",
            lineNumber: 78,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const BrandStarIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "31",
        height: "30",
        viewBox: "0 0 31 30",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16.384 0H14.2411V12.4133L5.46352 3.63578L3.94829 5.15102L12.7258 13.9286H0.3125V16.0715H12.7258L3.94829 24.849L5.46352 26.3642L14.2411 17.5866V30H16.384V17.5866L25.1615 26.3642L26.6767 24.849L17.8991 16.0715H30.3125V13.9286H17.8991L26.6767 5.151L25.1615 3.63578L16.384 12.4133V0Z",
            fill: "#852A1B"
        }, void 0, false, {
            fileName: "[project]/src/svg/StarIcons.tsx",
            lineNumber: 87,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/svg/StarIcons.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/src/svg/testimonial-icons/QuoteIcons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuoteIcon",
    ()=>QuoteIcon,
    "QuoteIconFive",
    ()=>QuoteIconFive,
    "QuoteIconFour",
    ()=>QuoteIconFour,
    "QuoteIconSix",
    ()=>QuoteIconSix,
    "QuoteIconThree",
    ()=>QuoteIconThree,
    "QuoteIconTwo",
    ()=>QuoteIconTwo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const QuoteIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "40",
            height: "32",
            viewBox: "0 0 40 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M15.417 2.25185V11.4963C15.417 13.6296 14.4936 16.079 12.6467 18.8444L4.33602 30.8148C3.77395 31.6049 3.01113 32 2.04757 32C0.682522 32 0 31.2099 0 29.6296V2.37037C0 0.790124 0.802967 0 2.4089 0H13.1285C14.6542 0 15.417 0.750615 15.417 2.25185Z",
                    fill: "currentcolor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/testimonial-icons/QuoteIcons.tsx",
                    lineNumber: 7,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M40 2.25185V11.4963C40 13.6296 39.0766 16.079 37.2298 18.8444L28.919 30.8148C28.357 31.6049 27.5942 32 26.6306 32C25.2656 32 24.583 31.2099 24.583 29.6296V2.37037C24.583 0.790124 25.386 0 26.9919 0H37.7115C39.2372 0 40 0.750615 40 2.25185Z",
                    fill: "currentcolor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/testimonial-icons/QuoteIcons.tsx",
                    lineNumber: 8,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/testimonial-icons/QuoteIcons.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const QuoteIconTwo = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "11",
            viewBox: "0 0 16 11",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.5928 0L14.8534 0.573292C14.4017 0.747015 13.9501 0.972856 13.4984 1.25081C13.0467 1.52877 12.6298 1.8241 12.2476 2.13681C11.8654 2.44951 11.57 2.77959 11.3616 3.12703L11.9349 3.59609H12.4039C13.1336 3.59609 13.759 3.75244 14.2801 4.06514C14.836 4.3431 15.253 4.7253 15.5309 5.21172C15.8436 5.69815 16 6.25407 16 6.87948C16 7.50488 15.8263 8.0608 15.4788 8.54723C15.1661 8.99891 14.7318 9.36373 14.1759 9.64169C13.6547 9.91965 13.0293 10.0586 12.2997 10.0586C11.6048 10.0586 10.9794 9.91965 10.4235 9.64169C9.86754 9.32898 9.43322 8.92942 9.12052 8.44299C8.80782 7.95656 8.65147 7.38327 8.65147 6.72312C8.65147 5.99348 8.79045 5.29859 9.0684 4.63844C9.38111 3.94354 9.79805 3.31813 10.3192 2.76222C10.8404 2.17155 11.4658 1.65038 12.1954 1.1987C12.9251 0.712269 13.7242 0.312704 14.5928 0ZM5.94137 0L6.20195 0.573292C5.75027 0.747015 5.29859 0.972856 4.84691 1.25081C4.39522 1.52877 3.97828 1.8241 3.59609 2.13681C3.2139 2.44951 2.91857 2.77959 2.7101 3.12703L3.28339 3.59609H3.75244C4.48208 3.59609 5.10749 3.75244 5.62866 4.06514C6.18458 4.3431 6.60152 4.7253 6.87948 5.21172C7.19218 5.69815 7.34853 6.25407 7.34853 6.87948C7.34853 7.50488 7.17481 8.0608 6.82736 8.54723C6.51466 8.99891 6.08035 9.36373 5.52443 9.64169C5.00326 9.91965 4.37785 10.0586 3.64821 10.0586C2.95331 10.0586 2.3279 9.91965 1.77199 9.64169C1.21607 9.32898 0.781759 8.92942 0.469055 8.44299C0.156352 7.95656 0 7.38327 0 6.72312C0 5.99348 0.138979 5.29859 0.416938 4.63844C0.729642 3.94354 1.14658 3.31813 1.66775 2.76222C2.18893 2.17155 2.81433 1.65038 3.54397 1.1987C4.27362 0.712269 5.07275 0.312704 5.94137 0Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/svg/testimonial-icons/QuoteIcons.tsx",
                lineNumber: 18,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/testimonial-icons/QuoteIcons.tsx",
            lineNumber: 17,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const QuoteIconThree = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "41",
            height: "43",
            viewBox: "0 0 41 43",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M40.4639 42.7598H24.3039V32.5198L35.5039 0.839844H40.4639V42.7598ZM16.6239 42.7598H0.463867V32.5198L11.6639 0.839844H16.6239V42.7598Z",
                fill: "currentcolor"
            }, void 0, false, {
                fileName: "[project]/src/svg/testimonial-icons/QuoteIcons.tsx",
                lineNumber: 27,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/testimonial-icons/QuoteIcons.tsx",
            lineNumber: 26,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const QuoteIconFour = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "31",
            height: "20",
            viewBox: "0 0 31 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M28 0L28.5 1.1C27.6333 1.43334 26.7667 1.86667 25.9 2.4C25.0333 2.93333 24.2333 3.5 23.5 4.1C22.7667 4.7 22.2 5.33333 21.8 6L22.9 6.9H23.8C25.2 6.9 26.4 7.2 27.4 7.8C28.4667 8.33334 29.2667 9.06667 29.8 10C30.4 10.9333 30.7 12 30.7 13.2C30.7 14.4 30.3667 15.4667 29.7 16.4C29.1 17.2667 28.2667 17.9667 27.2 18.5C26.2 19.0333 25 19.3 23.6 19.3C22.2667 19.3 21.0667 19.0333 20 18.5C18.9333 17.9 18.1 17.1333 17.5 16.2C16.9 15.2667 16.6 14.1667 16.6 12.9C16.6 11.5 16.8667 10.1667 17.4 8.9C18 7.56667 18.8 6.36667 19.8 5.3C20.8 4.16667 22 3.16667 23.4 2.3C24.8 1.36667 26.3333 0.6 28 0ZM11.4 0L11.9 1.1C11.0333 1.43334 10.1667 1.86667 9.3 2.4C8.43333 2.93333 7.63333 3.5 6.9 4.1C6.16667 4.7 5.6 5.33333 5.2 6L6.3 6.9H7.2C8.6 6.9 9.8 7.2 10.8 7.8C11.8667 8.33334 12.6667 9.06667 13.2 10C13.8 10.9333 14.1 12 14.1 13.2C14.1 14.4 13.7667 15.4667 13.1 16.4C12.5 17.2667 11.6667 17.9667 10.6 18.5C9.6 19.0333 8.4 19.3 7 19.3C5.66667 19.3 4.46667 19.0333 3.4 18.5C2.33333 17.9 1.5 17.1333 0.9 16.2C0.3 15.2667 0 14.1667 0 12.9C0 11.5 0.266667 10.1667 0.8 8.9C1.4 7.56667 2.2 6.36667 3.2 5.3C4.2 4.16667 5.4 3.16667 6.8 2.3C8.2 1.36667 9.73333 0.6 11.4 0Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/svg/testimonial-icons/QuoteIcons.tsx",
                lineNumber: 36,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/testimonial-icons/QuoteIcons.tsx",
            lineNumber: 35,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const QuoteIconFive = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "115",
            height: "94",
            viewBox: "0 0 115 94",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M64.8433 93V53.8755L94.7075 1H113L91.7105 47.6382H114.29V93H64.8433ZM1 93V53.8755L31.4358 1H49.7283L28.4389 47.6382H50.4464V93H1Z",
                    fill: "currentcolor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/testimonial-icons/QuoteIcons.tsx",
                    lineNumber: 45,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M64.5933 93V93.25H64.8433H114.29H114.54V93V47.6382V47.3882H114.29H92.0995L113.227 1.10382L113.389 0.75H113H94.7075H94.5615L94.4898 0.877054L64.6257 53.7525L64.5933 53.8098V53.8755V93ZM0.75 93V93.25H1H50.4464H50.6964V93V47.6382V47.3882H50.4464H28.8278L49.9558 1.10382L50.1173 0.75H49.7283H31.4358H31.2912L31.2191 0.875283L0.783331 53.7508L0.75 53.8087V53.8755V93Z",
                    stroke: "currentcolor",
                    strokeOpacity: "0.2",
                    strokeWidth: "0.5"
                }, void 0, false, {
                    fileName: "[project]/src/svg/testimonial-icons/QuoteIcons.tsx",
                    lineNumber: 46,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/testimonial-icons/QuoteIcons.tsx",
            lineNumber: 44,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const QuoteIconSix = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "63",
            height: "50",
            viewBox: "0 0 63 50",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M36.7657 50V39.1608C42.0105 38.4615 45.507 36.7133 47.2552 33.9161C49.0035 31.0023 49.8776 26.9231 49.8776 21.6783L58.4441 23.4266H37.1154V0H62.6399V17.4825C62.6399 25.8741 60.542 33.042 56.3461 38.986C52.2669 44.9301 45.7401 48.6014 36.7657 50ZM0 50V39.1608C5.24476 38.4615 8.74126 36.7133 10.4895 33.9161C12.2378 31.0023 13.1119 26.9231 13.1119 21.6783L21.6783 23.4266H0.34965V0H25.8741V17.4825C25.8741 25.8741 23.7762 33.042 19.5804 38.986C15.5012 44.9301 8.97436 48.6014 0 50Z",
                fill: "black",
                fillOpacity: "0.1"
            }, void 0, false, {
                fileName: "[project]/src/svg/testimonial-icons/QuoteIcons.tsx",
                lineNumber: 55,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/testimonial-icons/QuoteIcons.tsx",
            lineNumber: 54,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
}),
"[project]/src/svg/EmailIcons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmailIconFive",
    ()=>EmailIconFive,
    "EmailIconFour",
    ()=>EmailIconFour,
    "EmailIconOne",
    ()=>EmailIconOne,
    "EmailIconThree",
    ()=>EmailIconThree,
    "EmailIconTwo",
    ()=>EmailIconTwo,
    "SendEmailIcon",
    ()=>SendEmailIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const EmailIconOne = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "16",
            viewBox: "0 0 18 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M13 14.6H5C2.6 14.6 1 13.4 1 10.6V5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6Z",
                    stroke: "currentcolor",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/EmailIcons.tsx",
                    lineNumber: 12,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M13 5.40039L10.496 7.40039C9.672 8.05639 8.32 8.05639 7.496 7.40039L5 5.40039",
                    stroke: "currentcolor",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/EmailIcons.tsx",
                    lineNumber: 13,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/EmailIcons.tsx",
            lineNumber: 11,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const EmailIconTwo = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "17",
            height: "14",
            viewBox: "0 0 17 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 2.5C16 1.675 15.325 1 14.5 1H2.5C1.675 1 1 1.675 1 2.5M16 2.5V11.5C16 12.325 15.325 13 14.5 13H2.5C1.675 13 1 12.325 1 11.5V2.5M16 2.5L8.5 7.74998L1 2.5",
                stroke: "#A1A4AA",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/EmailIcons.tsx",
                lineNumber: 23,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/EmailIcons.tsx",
            lineNumber: 22,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const EmailIconThree = ({ colorName = "white", strokeWidth = "2" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "17",
            height: "14",
            viewBox: "0 0 17 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 2.5C16 1.675 15.325 1 14.5 1H2.5C1.675 1 1 1.675 1 2.5M16 2.5V11.5C16 12.325 15.325 13 14.5 13H2.5C1.675 13 1 12.325 1 11.5V2.5M16 2.5L8.5 7.75L1 2.5",
                stroke: colorName,
                strokeWidth: strokeWidth,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/EmailIcons.tsx",
                lineNumber: 32,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/EmailIcons.tsx",
            lineNumber: 31,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const EmailIconFour = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "16",
            viewBox: "0 0 20 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.5 2.75C18.5 1.7875 17.7125 1 16.75 1H2.75C1.7875 1 1 1.7875 1 2.75M18.5 2.75V13.25C18.5 14.2125 17.7125 15 16.75 15H2.75C1.7875 15 1 14.2125 1 13.25V2.75M18.5 2.75L9.75 8.875L1 2.75",
                stroke: "white",
                strokeOpacity: "0.4",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/EmailIcons.tsx",
                lineNumber: 41,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/EmailIcons.tsx",
            lineNumber: 40,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const EmailIconFive = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "17",
            height: "14",
            viewBox: "0 0 17 14",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2.58672 1H14.593C15.4184 1 16.0938 1.675 16.0938 2.5V11.5C16.0938 12.325 15.4184 13 14.593 13H2.58672C1.76129 13 1.08594 12.325 1.08594 11.5V2.5C1.08594 1.675 1.76129 1 2.58672 1Z",
                    stroke: "#FF5722",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/EmailIcons.tsx",
                    lineNumber: 50,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16.0938 2.5L8.58984 7.75L1.08594 2.5",
                    stroke: "#FF5722",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/EmailIcons.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/EmailIcons.tsx",
            lineNumber: 49,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const SendEmailIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17.4918 0.523919C17.0417 0.0609703 16.3754 -0.110257 15.7541 0.0709359L1.2672 4.28277C0.611729 4.46578 0.147138 4.98852 0.0219872 5.65169C-0.105865 6.32754 0.340718 7.18639 0.924156 7.54515L5.45391 10.3283C5.9185 10.6146 6.51815 10.543 6.9026 10.1552L12.0896 4.93597C12.3507 4.66328 12.7829 4.66328 13.044 4.93597C13.3051 5.1978 13.3051 5.62451 13.044 5.8963L7.84799 11.1156C7.46263 11.5033 7.3906 12.1049 7.67422 12.5733L10.442 17.1484C10.7661 17.6911 11.3243 18 11.9366 18C12.0086 18 12.0896 18 12.1617 17.99C12.8639 17.9003 13.4222 17.4193 13.6293 16.7398L17.924 2.27243C18.1131 1.65638 17.942 0.985961 17.4918 0.523919Z",
                    fill: "currentcolor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/EmailIcons.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    opacity: "0.4",
                    d: "M6.7091 15.5302C6.97201 15.7957 6.97201 16.226 6.7091 16.4915L5.47919 17.7281C5.34774 17.8613 5.17487 17.9274 5.002 17.9274C4.82913 17.9274 4.65626 17.8613 4.5248 17.7281C4.261 17.4627 4.261 17.0332 4.5248 16.7678L5.75381 15.5302C6.01761 15.2657 6.44529 15.2657 6.7091 15.5302ZM6.00348 12.0984C6.26639 12.3639 6.26639 12.7942 6.00348 13.0597L4.77358 14.2963C4.64212 14.4295 4.46925 14.4956 4.29638 14.4956C4.12351 14.4956 3.95064 14.4295 3.81919 14.2963C3.55538 14.0309 3.55538 13.6014 3.81919 13.336L5.04819 12.0984C5.312 11.8339 5.73967 11.8339 6.00348 12.0984ZM2.61701 11.0182C2.87992 11.2836 2.87992 11.714 2.61701 11.9794L1.38711 13.216C1.25566 13.3492 1.08279 13.4154 0.909915 13.4154C0.737044 13.4154 0.564173 13.3492 0.432719 13.216C0.168911 12.9506 0.168911 12.5212 0.432719 12.2557L1.66172 11.0182C1.92553 10.7536 2.35321 10.7536 2.61701 11.0182Z",
                    fill: "currentcolor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/EmailIcons.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/EmailIcons.tsx",
            lineNumber: 60,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
}),
"[project]/src/svg/FeaturesIcons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AwesomeDesignIcon",
    ()=>AwesomeDesignIcon,
    "EasyReturnIcon",
    ()=>EasyReturnIcon,
    "FastPerformanceIcon",
    ()=>FastPerformanceIcon,
    "FastShippingIcon",
    ()=>FastShippingIcon,
    "FeatureArrowIcon",
    ()=>FeatureArrowIcon,
    "GuaranteedSafetyIcon",
    ()=>GuaranteedSafetyIcon,
    "SecurePaymentIcon",
    ()=>SecurePaymentIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const GuaranteedSafetyIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "26",
            height: "26",
            viewBox: "0 0 26 26",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22.1594 3.76253L14.5434 0.370404C13.4257 -0.123468 11.7361 -0.123468 10.6184 0.370404L3.0024 3.76253C1.07889 4.6203 0.792969 5.79 0.792969 6.41384C0.792969 7.03768 1.07889 8.20738 3.0024 9.06516L10.6184 12.4573C11.1773 12.7042 11.8791 12.8342 12.5809 12.8342C13.2827 12.8342 13.9846 12.7042 14.5434 12.4573L22.1594 9.06516C24.0829 8.20738 24.3689 7.03768 24.3689 6.41384C24.3689 5.79 24.0959 4.6203 22.1594 3.76253Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/FeaturesIcons.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    opacity: "0.4",
                    d: "M12.5807 19.5535C12.0869 19.5535 11.593 19.4495 11.1381 19.2546L2.37839 15.3556C1.03973 14.7577 0 13.1591 0 11.6905C0 11.1576 0.428889 10.7288 0.961751 10.7288C1.49461 10.7288 1.9235 11.1576 1.9235 11.6905C1.9235 12.3923 2.50835 13.3021 3.15818 13.588L11.9179 17.487C12.3338 17.669 12.8147 17.669 13.2306 17.487L21.9903 13.588C22.6401 13.3021 23.225 12.4053 23.225 11.6905C23.225 11.1576 23.6539 10.7288 24.1867 10.7288C24.7196 10.7288 25.1485 11.1576 25.1485 11.6905C25.1485 13.1461 24.1088 14.7577 22.7701 15.3556L14.0104 19.2546C13.5685 19.4495 13.0746 19.5535 12.5807 19.5535Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/FeaturesIcons.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    opacity: "0.4",
                    d: "M12.5807 25.9998C12.0869 25.9998 11.593 25.8958 11.1381 25.7008L2.37839 21.8019C0.935758 21.165 0 19.7224 0 18.1368C0 17.6039 0.428889 17.175 0.961751 17.175C1.49461 17.175 1.9235 17.6039 1.9235 18.1368C1.9235 18.9556 2.40438 19.6964 3.15818 20.0343L11.9179 23.9333C12.3338 24.1153 12.8147 24.1153 13.2306 23.9333L21.9903 20.0343C22.7311 19.7094 23.225 18.9556 23.225 18.1368C23.225 17.6039 23.6539 17.175 24.1867 17.175C24.7196 17.175 25.1485 17.6039 25.1485 18.1368C25.1485 19.7224 24.2127 21.152 22.7701 21.8019L14.0104 25.7008C13.5685 25.8958 13.0746 25.9998 12.5807 25.9998Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/FeaturesIcons.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/FeaturesIcons.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const FastPerformanceIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "28",
        height: "26",
        viewBox: "0 0 28 26",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M11.1391 14.1861H15.1554V23.5445C15.1554 24.9222 16.8711 25.5721 17.7809 24.5323L27.6202 13.3542C28.478 12.3794 27.7891 10.8587 26.4894 10.8587H22.4731V1.50026C22.4731 0.1225 20.7574 -0.527389 19.8476 0.512433L10.0083 11.6905C9.16348 12.6653 9.85235 14.1861 11.1391 14.1861Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/FeaturesIcons.tsx",
                    lineNumber: 18,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10.0732 3.09894H0.974825C0.441921 3.09894 0 2.65702 0 2.12411C0 1.5912 0.441921 1.14928 0.974825 1.14928H10.0732C10.6061 1.14928 11.048 1.5912 11.048 2.12411C11.048 2.65702 10.6061 3.09894 10.0732 3.09894Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/FeaturesIcons.tsx",
                    lineNumber: 19,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8.77343 23.8956H0.974825C0.441921 23.8956 0 23.4536 0 22.9207C0 22.3878 0.441921 21.9459 0.974825 21.9459H8.77343C9.30633 21.9459 9.74825 22.3878 9.74825 22.9207C9.74825 23.4536 9.30633 23.8956 8.77343 23.8956Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/FeaturesIcons.tsx",
                    lineNumber: 20,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4.87413 13.4972H0.974825C0.441921 13.4972 0 13.0553 0 12.5224C0 11.9895 0.441921 11.5476 0.974825 11.5476H4.87413C5.40703 11.5476 5.84895 11.9895 5.84895 12.5224C5.84895 13.0553 5.40703 13.4972 4.87413 13.4972Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/FeaturesIcons.tsx",
                    lineNumber: 21,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/FeaturesIcons.tsx",
            lineNumber: 17,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/svg/FeaturesIcons.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const AwesomeDesignIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "27",
        height: "28",
        viewBox: "0 0 27 28",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.864 12.3287C20.8913 12.683 20.7686 13.0509 20.4961 13.3234L12.2926 21.5268C10.4803 23.3391 8.65425 23.3391 6.82824 21.5268L1.36383 16.0624C0.437199 15.1222 -0.0261177 14.1819 0.00113616 13.2417H0.0965244L20.7005 12.3423L20.864 12.3287Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/svg/FeaturesIcons.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.4959 11.4976L9.29459 0.296382C8.89941 -0.0987938 8.24531 -0.0987938 7.85013 0.296382C7.45495 0.691557 7.45495 1.34564 7.85013 1.74081L9.03568 2.92633L1.36371 10.5982C0.491583 11.4703 0.0283901 12.3559 0.00113616 13.2417H0.0965244L20.7005 12.3423L20.864 12.3287C20.8504 12.0289 20.714 11.7156 20.4959 11.4976Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/svg/FeaturesIcons.tsx",
                lineNumber: 29,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.0788 28H1.36382C0.805111 28 0.341795 27.5367 0.341795 26.978C0.341795 26.4193 0.805111 25.956 1.36382 25.956H19.0788C19.6376 25.956 20.1009 26.4193 20.1009 26.978C20.1009 27.5367 19.6376 28 19.0788 28Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/svg/FeaturesIcons.tsx",
                lineNumber: 30,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M23.644 17.1392C23.2897 16.7577 22.6356 16.7577 22.2813 17.1392C21.8588 17.6025 19.7603 19.9735 19.7603 21.7586C19.7603 23.5301 21.1911 24.961 22.9626 24.961C24.7341 24.961 26.165 23.5301 26.165 21.7586C26.165 19.9735 24.0664 17.6025 23.644 17.1392Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/svg/FeaturesIcons.tsx",
                lineNumber: 31,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/svg/FeaturesIcons.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const FastShippingIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "26",
        height: "29",
        viewBox: "0 0 26 29",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1.36073 7.61031L13.0007 14.3433L24.6407 7.61031M13 27.7714V14.332M25 19.6631V8.9969C24.9995 8.52929 24.8761 8.07003 24.6421 7.66518C24.408 7.26034 24.0717 6.92415 23.6667 6.69034L14.3333 1.35725C13.9279 1.12321 13.4681 1 13 1C12.5319 1 12.0721 1.12321 11.6667 1.35725L2.33333 6.69034C1.92835 6.92415 1.59197 7.26034 1.35795 7.66518C1.12392 8.07003 1.00048 8.52929 1 8.9969V19.6631C1.00048 20.1307 1.12392 20.59 1.35795 20.9948C1.59197 21.3997 1.92835 21.7358 2.33333 21.9697L11.6667 27.3027C12.0721 27.5368 12.5319 27.66 13 27.66C13.4681 27.66 13.9279 27.5368 14.3333 27.3027L23.6667 21.9697C24.0717 21.7358 24.408 21.3997 24.6421 20.9948C24.8761 20.59 24.9995 20.1307 25 19.6631Z",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/svg/FeaturesIcons.tsx",
            lineNumber: 37,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/svg/FeaturesIcons.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const SecurePaymentIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "29",
        height: "29",
        viewBox: "0 0 29 29",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.57031 19.1755L19.5036 3.24219",
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/FeaturesIcons.tsx",
                lineNumber: 43,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.1323 22.3744L14.7323 20.7744",
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/FeaturesIcons.tsx",
                lineNumber: 44,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.7227 18.7843L19.9093 15.5977",
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/FeaturesIcons.tsx",
                lineNumber: 45,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.13503 11.9834L11.9884 3.13005C14.815 0.303381 16.2284 0.290047 19.0284 3.09005L25.575 9.63671C28.375 12.4367 28.3617 13.85 25.535 16.6767L16.6817 25.53C13.855 28.3567 12.4417 28.37 9.64169 25.57L3.09503 19.0234C0.295027 16.2234 0.295026 14.8234 3.13503 11.9834Z",
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/FeaturesIcons.tsx",
                lineNumber: 46,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 27.334H27.6667",
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/FeaturesIcons.tsx",
                lineNumber: 47,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/svg/FeaturesIcons.tsx",
        lineNumber: 42,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const EasyReturnIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "29",
        height: "24",
        viewBox: "0 0 29 24",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M27.8959 2.2207V9.55596H20.561",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/FeaturesIcons.tsx",
                lineNumber: 53,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 21.7815V14.4463H8.33487",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/FeaturesIcons.tsx",
                lineNumber: 54,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.06842 8.33237C4.68842 6.5802 5.74215 5.01366 7.1313 3.77891C8.52044 2.54416 10.1997 1.68144 12.0124 1.27127C13.8251 0.861101 15.7122 0.916837 17.4976 1.43328C19.2829 1.94972 20.9084 2.91004 22.2222 4.22462L27.8945 9.55491M1 14.4451L6.6723 19.7754C7.98615 21.09 9.61159 22.0503 11.3969 22.5667C13.1823 23.0832 15.0694 23.1389 16.8821 22.7287C18.6948 22.3186 20.3741 21.4558 21.7632 20.2211C23.1524 18.9863 24.2061 17.4198 24.8261 15.6676",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/FeaturesIcons.tsx",
                lineNumber: 55,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/svg/FeaturesIcons.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const FeatureArrowIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M99 74.5858L76 97.5858V25V24H75H2.41421L25.4142 1H99V25V74.5858ZM30.1193 51L1 80.1193V51H30.1193ZM49 99H20.3031L49 70.3032V99Z",
            stroke: "white",
            strokeWidth: "2"
        }, void 0, false, {
            fileName: "[project]/src/svg/FeaturesIcons.tsx",
            lineNumber: 60,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/svg/FeaturesIcons.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/src/svg/CrossIcons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CrossIcon",
    ()=>CrossIcon,
    "CrossIconFive",
    ()=>CrossIconFive,
    "CrossIconFour",
    ()=>CrossIconFour,
    "CrossIconThree",
    ()=>CrossIconThree,
    "CrossIconTwo",
    ()=>CrossIconTwo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const CrossIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    width: "32.621",
                    height: "1.00918",
                    transform: "matrix(0.704882 0.709325 -0.704882 0.709325 1.0061 0)",
                    fill: "currentcolor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/CrossIcons.tsx",
                    lineNumber: 7,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    width: "32.621",
                    height: "1.00918",
                    transform: "matrix(0.704882 -0.709325 0.704882 0.709325 0 23.2842)",
                    fill: "currentcolor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/CrossIcons.tsx",
                    lineNumber: 8,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/CrossIcons.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const CrossIconTwo = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "38",
            height: "38",
            viewBox: "0 0 38 38",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9.80859 9.80762L28.1934 28.1924",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/CrossIcons.tsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9.80859 28.1924L28.1934 9.80761",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/CrossIcons.tsx",
                    lineNumber: 18,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/CrossIcons.tsx",
            lineNumber: 16,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const CrossIconThree = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    className: "path-1",
                    d: "M11 1L1 11",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/CrossIcons.tsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    className: "path-2",
                    d: "M1 1L11 11",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/CrossIcons.tsx",
                    lineNumber: 28,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/CrossIcons.tsx",
            lineNumber: 26,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const CrossIconFour = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "10",
            height: "10",
            viewBox: "0 0 10 10",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 1L1 9",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/CrossIcons.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M1 1L9 9",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/CrossIcons.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/CrossIcons.tsx",
            lineNumber: 37,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const CrossIconFive = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "10",
                height: "10",
                viewBox: "0 0 10 10",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9.53033 1.53033C9.82322 1.23744 9.82322 0.762563 9.53033 0.46967C9.23744 0.176777 8.76256 0.176777 8.46967 0.46967L5 3.93934L1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L3.93934 5L0.46967 8.46967C0.176777 8.76256 0.176777 9.23744 0.46967 9.53033C0.762563 9.82322 1.23744 9.82322 1.53033 9.53033L5 6.06066L8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033C9.82322 9.23744 9.82322 8.76256 9.53033 8.46967L6.06066 5L9.53033 1.53033Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/CrossIcons.tsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/svg/CrossIcons.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            "        "
        ]
    }, void 0, true);
};
}),
"[project]/src/svg/ChooseIcons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChooseArrow",
    ()=>ChooseArrow,
    "GuideIcon",
    ()=>GuideIcon,
    "ProductIcon",
    ()=>ProductIcon,
    "SolutionIcon",
    ()=>SolutionIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const ProductIcon = ({ className = '', color = 'currentColor', size = 24 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size + 1,
        viewBox: "0 0 24 25",
        fill: "none",
        className: className,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M20.1513 13.2275V19.1113C20.1513 20.627 18.8885 22.2501 17.3706 22.7275L13.3015 23.9926C12.5872 24.2194 11.4264 24.2194 10.7248 23.9926L6.65575 22.7275C5.12506 22.2501 3.875 20.627 3.875 19.1113L3.88776 13.2275L9.52579 16.6647C10.9034 17.5121 13.1739 17.5121 14.5516 16.6647L20.1513 13.2275Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/svg/ChooseIcons.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22.1918 5.61295L14.5511 0.92263C13.1735 0.0752691 10.903 0.0752691 9.52535 0.92263L1.84639 5.61295C-0.615465 7.10479 -0.615465 10.4823 1.84639 11.9861L3.88731 13.2273L9.52535 16.6645C10.903 17.5118 13.1735 17.5118 14.5511 16.6645L20.1509 13.2273L21.8984 12.1531V18.7896C21.8984 19.2789 22.3321 19.6847 22.8551 19.6847C23.3781 19.6847 23.8118 19.2789 23.8118 18.7896V9.9333C24.322 8.39373 23.799 6.60353 22.1918 5.61295Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/svg/ChooseIcons.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/svg/ChooseIcons.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const GuideIcon = ({ className = '', color = 'currentColor', size = 22 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 22 22",
        fill: "none",
        className: className,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.8996 15.6754H14.2996C13.8486 15.6754 13.4746 15.3014 13.4746 14.8504C13.4746 14.3994 13.8486 14.0254 14.2996 14.0254H20.8996C21.3506 14.0254 21.7246 14.3994 21.7246 14.8504C21.7246 15.3014 21.3506 15.6754 20.8996 15.6754Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/svg/ChooseIcons.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.8996 20.0748H14.2996C13.8486 20.0748 13.4746 19.7008 13.4746 19.2498C13.4746 18.7988 13.8486 18.4248 14.2996 18.4248H20.8996C21.3506 18.4248 21.7246 18.7988 21.7246 19.2498C21.7246 19.7008 21.3506 20.0748 20.8996 20.0748Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/svg/ChooseIcons.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M22.0004 7.172V2.178C22.0004 0.627 21.2964 0 19.5474 0H15.1034C13.3544 0 12.6504 0.627 12.6504 2.178V7.161C12.6504 8.723 13.3544 9.339 15.1034 9.339H19.5474C21.2964 9.35 22.0004 8.723 22.0004 7.172Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/svg/ChooseIcons.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.35 7.172V2.178C9.35 0.627 8.646 0 6.897 0H2.453C0.704 0 0 0.627 0 2.178V7.161C0 8.723 0.704 9.339 2.453 9.339H6.897C8.646 9.35 9.35 8.723 9.35 7.172Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/svg/ChooseIcons.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.4",
                d: "M9.35 19.5474V15.1034C9.35 13.3544 8.646 12.6504 6.897 12.6504H2.453C0.704 12.6504 0 13.3544 0 15.1034V19.5474C0 21.2964 0.704 22.0004 2.453 22.0004H6.897C8.646 22.0004 9.35 21.2964 9.35 19.5474Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/svg/ChooseIcons.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/svg/ChooseIcons.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const SolutionIcon = ({ className = '', color = 'currentColor', size = 22 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 22 22",
        fill: "none",
        className: className,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.1249 7.12479L17.5107 8.73896L14.2607 5.48896L15.8749 3.87479C16.3299 3.41979 16.9149 3.20312 17.4999 3.20312C18.0849 3.20312 18.6699 3.41979 19.1249 3.87479C20.0241 4.77396 20.0241 6.22563 19.1249 7.12479Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/svg/ChooseIcons.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.5107 8.73896L5.04156 21.2084C4.1424 22.1076 2.69073 22.1076 1.79156 21.2084C0.892396 20.3093 0.892396 18.8576 1.79156 17.9584L14.2607 5.48896L17.5107 8.73896Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/svg/ChooseIcons.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.77939 2.79205L9.22355 1.28622C9.26689 1.14538 9.22356 0.993718 9.12606 0.885385C9.02856 0.777051 8.85522 0.733718 8.71439 0.777051L7.20856 1.22122L5.70272 0.777051C5.56189 0.733718 5.41022 0.777051 5.30189 0.874551C5.19356 0.982885 5.16106 1.13455 5.20439 1.27538L5.63772 2.79205L5.19355 4.29788C5.15022 4.43872 5.19356 4.59038 5.29106 4.69872C5.39939 4.80705 5.55106 4.83955 5.69189 4.79622L7.20856 4.36288L8.71439 4.80705C8.75772 4.81788 8.79022 4.82872 8.83356 4.82872C8.94189 4.82872 9.03939 4.78538 9.12606 4.70955C9.23439 4.60122 9.26689 4.44955 9.22355 4.30872L8.77939 2.79205Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/svg/ChooseIcons.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.4454 9.29205L4.88957 7.78622C4.9329 7.64538 4.88957 7.49372 4.79207 7.38538C4.68374 7.27705 4.53207 7.24455 4.39124 7.28788L2.87457 7.72122L1.36874 7.27705C1.2279 7.23372 1.07624 7.27705 0.967904 7.37455C0.859571 7.48288 0.827071 7.63455 0.870404 7.77538L1.30374 9.29205L0.859571 10.7979C0.816237 10.9387 0.859571 11.0904 0.957071 11.1987C1.0654 11.3071 1.21707 11.3396 1.3579 11.2962L2.86374 10.8521L4.36957 11.2962C4.40207 11.3071 4.4454 11.3071 4.48874 11.3071C4.59707 11.3071 4.69457 11.2637 4.78124 11.1879C4.88957 11.0796 4.92207 10.9279 4.87874 10.7871L4.4454 9.29205Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/svg/ChooseIcons.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.696 14.7083L21.1402 13.2025C21.1835 13.0616 21.1402 12.91 21.0427 12.8016C20.9344 12.6933 20.7827 12.6608 20.6419 12.7041L19.136 13.1483L17.6302 12.7041C17.4894 12.6608 17.3377 12.7041 17.2294 12.8016C17.121 12.91 17.0885 13.0616 17.1319 13.2025L17.576 14.7083L17.1319 16.2141C17.0885 16.355 17.1319 16.5066 17.2294 16.615C17.3377 16.7233 17.4894 16.7558 17.6302 16.7125L19.136 16.2683L20.6419 16.7125C20.6744 16.7233 20.7177 16.7233 20.761 16.7233C20.8694 16.7233 20.9669 16.68 21.0535 16.6041C21.1619 16.4958 21.1944 16.3441 21.151 16.2033L20.696 14.7083Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/svg/ChooseIcons.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/svg/ChooseIcons.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ChooseArrow = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "100",
        height: "100",
        viewBox: "0 0 100 100",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M99 74.5858L76 97.5858V25V24H75H2.41421L25.4142 1H99V25V74.5858ZM30.1193 51L1 80.1193V51H30.1193ZM49 99H20.3031L49 70.3032V99Z",
            stroke: "white",
            strokeWidth: "2"
        }, void 0, false, {
            fileName: "[project]/src/svg/ChooseIcons.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/svg/ChooseIcons.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/svg/CheckIcons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckIcon",
    ()=>CheckIcon,
    "CheckIconThree",
    ()=>CheckIconThree,
    "CheckIconTwo",
    ()=>CheckIconTwo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const CheckIcon = ({ color = "currentColor" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "10",
            height: "9",
            viewBox: "0 0 10 9",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 5.75061C1 5.75061 2.6 6.66314 3.4 8.00061C3.4 8.00061 5.8 2.75061 9 1.00061",
                stroke: color,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/CheckIcons.tsx",
                lineNumber: 7,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/CheckIcons.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const CheckIconTwo = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "9",
            viewBox: "0 0 12 9",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11 1L4.125 8L1 4.81818",
                stroke: "black",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/CheckIcons.tsx",
                lineNumber: 16,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/CheckIcons.tsx",
            lineNumber: 15,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const CheckIconThree = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "11",
            height: "10",
            viewBox: "0 0 11 10",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.50631 0.886963L4.26771 6.12552L1.49369 3.35158L0 4.84527L4.26771 9.11302L11 2.38065L9.50631 0.886963Z",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/svg/CheckIcons.tsx",
                lineNumber: 25,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/CheckIcons.tsx",
            lineNumber: 24,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
}),
"[project]/src/svg/social-icons/Instagram.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InstagramFive",
    ()=>InstagramFive,
    "InstagramFour",
    ()=>InstagramFour,
    "InstagramSvg",
    ()=>InstagramSvg,
    "InstagramThree",
    ()=>InstagramThree,
    "InstagramTwo",
    ()=>InstagramTwo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const InstagramSvg = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z",
                        stroke: "currentcolor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/svg/social-icons/Instagram.tsx",
                        lineNumber: 8,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10.8002 7.55921C10.8866 8.14178 10.7871 8.73676 10.5158 9.25952C10.2446 9.78228 9.81539 10.2062 9.28932 10.471C8.76326 10.7358 8.1671 10.8279 7.58564 10.7344C7.00417 10.6408 6.46702 10.3663 6.05057 9.94982C5.63413 9.53338 5.3596 8.99622 5.26603 8.41476C5.17247 7.8333 5.26463 7.23714 5.52941 6.71107C5.7942 6.18501 6.21812 5.75583 6.74087 5.48458C7.26363 5.21333 7.85861 5.11382 8.44119 5.20021C9.03543 5.28833 9.58558 5.56524 10.0104 5.99003C10.4352 6.41482 10.7121 6.96497 10.8002 7.55921Z",
                        stroke: "currentcolor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/svg/social-icons/Instagram.tsx",
                        lineNumber: 9,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M11.8501 4.15039H11.8571",
                        stroke: "currentcolor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/svg/social-icons/Instagram.tsx",
                        lineNumber: 10,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/svg/social-icons/Instagram.tsx",
                lineNumber: 7,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/social-icons/Instagram.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const InstagramTwo = ({ width = "16", height = "16", viewBox = "0 0 16 16" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: width,
            height: height,
            viewBox: viewBox,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.0586 4.94727C12.6109 4.94727 13.0586 4.49955 13.0586 3.94727C13.0586 3.39498 12.6109 2.94727 12.0586 2.94727V4.94727ZM12.0496 2.94727C11.4973 2.94727 11.0496 3.39498 11.0496 3.94727C11.0496 4.49955 11.4973 4.94727 12.0496 4.94727V2.94727ZM8 14C6.32181 14 5.16377 13.9979 4.2928 13.8808C3.45059 13.7675 3.02803 13.5636 2.73223 13.2678L1.31802 14.682C2.04735 15.4113 2.96231 15.7199 4.0263 15.8629C5.06152 16.0021 6.37835 16 8 16V14ZM0 8C0 9.62165 -0.00212373 10.9385 0.137058 11.9737C0.280107 13.0377 0.588687 13.9526 1.31802 14.682L2.73223 13.2678C2.43644 12.972 2.23246 12.5494 2.11922 11.7072C2.00212 10.8362 2 9.67819 2 8H0ZM14 8C14 9.67819 13.9979 10.8362 13.8808 11.7072C13.7675 12.5494 13.5636 12.972 13.2678 13.2678L14.682 14.682C15.4113 13.9526 15.7199 13.0377 15.8629 11.9737C16.0021 10.9385 16 9.62165 16 8H14ZM8 16C9.62165 16 10.9385 16.0021 11.9737 15.8629C13.0377 15.7199 13.9526 15.4113 14.682 14.682L13.2678 13.2678C12.972 13.5636 12.5494 13.7675 11.7072 13.8808C10.8362 13.9979 9.67819 14 8 14V16ZM8 2C9.67819 2 10.8362 2.00212 11.7072 2.11922C12.5494 2.23246 12.972 2.43644 13.2678 2.73223L14.682 1.31802C13.9526 0.588687 13.0377 0.280107 11.9737 0.137058C10.9385 -0.00212373 9.62165 0 8 0V2ZM16 8C16 6.37835 16.0021 5.06152 15.8629 4.0263C15.7199 2.96231 15.4113 2.04735 14.682 1.31802L13.2678 2.73223C13.5636 3.02803 13.7675 3.45059 13.8808 4.2928C13.9979 5.16377 14 6.32181 14 8H16ZM8 0C6.37835 0 5.06152 -0.00212373 4.0263 0.137058C2.96231 0.280107 2.04735 0.588687 1.31802 1.31802L2.73223 2.73223C3.02803 2.43644 3.45059 2.23246 4.2928 2.11922C5.16377 2.00212 6.32181 2 8 2V0ZM2 8C2 6.32181 2.00212 5.16377 2.11922 4.2928C2.23246 3.45059 2.43644 3.02803 2.73223 2.73223L1.31802 1.31802C0.588687 2.04735 0.280107 2.96231 0.137058 4.0263C-0.00212373 5.06152 0 6.37835 0 8H2ZM10.3171 8.00134C10.3171 9.28031 9.28031 10.3171 8.00134 10.3171V12.3171C10.3849 12.3171 12.3171 10.3849 12.3171 8.00134H10.3171ZM8.00134 10.3171C6.72236 10.3171 5.68555 9.28031 5.68555 8.00134H3.68555C3.68555 10.3849 5.61779 12.3171 8.00134 12.3171V10.3171ZM5.68555 8.00134C5.68555 6.72236 6.72236 5.68555 8.00134 5.68555V3.68555C5.61779 3.68555 3.68555 5.61779 3.68555 8.00134H5.68555ZM8.00134 5.68555C9.28031 5.68555 10.3171 6.72236 10.3171 8.00134H12.3171C12.3171 5.61779 10.3849 3.68555 8.00134 3.68555V5.68555ZM12.0586 2.94727H12.0496V4.94727H12.0586V2.94727Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/svg/social-icons/Instagram.tsx",
                lineNumber: 20,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/social-icons/Instagram.tsx",
            lineNumber: 19,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const InstagramThree = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "34",
            height: "34",
            viewBox: "0 0 34 34",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M24.5 2H9.5C5.35786 2 2 5.35786 2 9.5V24.5C2 28.6421 5.35786 32 9.5 32H24.5C28.6421 32 32 28.6421 32 24.5V9.5C32 5.35786 28.6421 2 24.5 2Z",
                    stroke: "white",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/social-icons/Instagram.tsx",
                    lineNumber: 29,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M23 16.0545C23.1852 17.3028 22.9719 18.5778 22.3907 19.698C21.8094 20.8182 20.8898 21.7266 19.7625 22.294C18.6352 22.8614 17.3577 23.0589 16.1117 22.8584C14.8657 22.6579 13.7147 22.0696 12.8223 21.1772C11.9299 20.2848 11.3416 19.1338 11.1412 17.8878C10.9407 16.6418 11.1381 15.3643 11.7055 14.237C12.2729 13.1098 13.1813 12.1901 14.3015 11.6088C15.4217 11.0276 16.6967 10.8144 17.945 10.9995C19.2184 11.1883 20.3973 11.7817 21.3076 12.6919C22.2179 13.6022 22.8112 14.7811 23 16.0545Z",
                    stroke: "white",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/social-icons/Instagram.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M25.25 8.75H25.265",
                    stroke: "white",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/social-icons/Instagram.tsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/social-icons/Instagram.tsx",
            lineNumber: 28,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const InstagramFour = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 1.6207C11.4047 1.6207 11.6895 1.63125 12.6352 1.67344C13.5141 1.71211 13.9887 1.85977 14.3051 1.98281C14.7234 2.14453 15.0258 2.34141 15.3387 2.6543C15.6551 2.9707 15.8484 3.26953 16.0102 3.68789C16.1332 4.0043 16.2809 4.48242 16.3195 5.35781C16.3617 6.30703 16.3723 6.5918 16.3723 8.99297C16.3723 11.3977 16.3617 11.6824 16.3195 12.6281C16.2809 13.507 16.1332 13.9816 16.0102 14.298C15.8484 14.7164 15.6516 15.0187 15.3387 15.3316C15.0223 15.648 14.7234 15.8414 14.3051 16.0031C13.9887 16.1262 13.5105 16.2738 12.6352 16.3125C11.6859 16.3547 11.4012 16.3652 9 16.3652C6.59531 16.3652 6.31055 16.3547 5.36484 16.3125C4.48594 16.2738 4.01133 16.1262 3.69492 16.0031C3.27656 15.8414 2.97422 15.6445 2.66133 15.3316C2.34492 15.0152 2.15156 14.7164 1.98984 14.298C1.8668 13.9816 1.71914 13.5035 1.68047 12.6281C1.63828 11.6789 1.62773 11.3941 1.62773 8.99297C1.62773 6.58828 1.63828 6.30351 1.68047 5.35781C1.71914 4.47891 1.8668 4.0043 1.98984 3.68789C2.15156 3.26953 2.34844 2.96719 2.66133 2.6543C2.97773 2.33789 3.27656 2.14453 3.69492 1.98281C4.01133 1.85977 4.48945 1.71211 5.36484 1.67344C6.31055 1.63125 6.59531 1.6207 9 1.6207ZM9 0C6.55664 0 6.25078 0.0105469 5.29102 0.0527344C4.33477 0.0949219 3.67734 0.249609 3.10781 0.471094C2.51367 0.703125 2.01094 1.00898 1.51172 1.51172C1.00898 2.01094 0.703125 2.51367 0.471094 3.1043C0.249609 3.67734 0.0949219 4.33125 0.0527344 5.2875C0.0105469 6.25078 0 6.55664 0 9C0 11.4434 0.0105469 11.7492 0.0527344 12.709C0.0949219 13.6652 0.249609 14.3227 0.471094 14.8922C0.703125 15.4863 1.00898 15.9891 1.51172 16.4883C2.01094 16.9875 2.51367 17.2969 3.1043 17.5254C3.67734 17.7469 4.33125 17.9016 5.2875 17.9437C6.24727 17.9859 6.55312 17.9965 8.99648 17.9965C11.4398 17.9965 11.7457 17.9859 12.7055 17.9437C13.6617 17.9016 14.3191 17.7469 14.8887 17.5254C15.4793 17.2969 15.982 16.9875 16.4813 16.4883C16.9805 15.9891 17.2898 15.4863 17.5184 14.8957C17.7398 14.3227 17.8945 13.6687 17.9367 12.7125C17.9789 11.7527 17.9895 11.4469 17.9895 9.00352C17.9895 6.56016 17.9789 6.2543 17.9367 5.29453C17.8945 4.33828 17.7398 3.68086 17.5184 3.11133C17.2969 2.51367 16.991 2.01094 16.4883 1.51172C15.9891 1.0125 15.4863 0.703125 14.8957 0.474609C14.3227 0.253125 13.6688 0.0984375 12.7125 0.05625C11.7492 0.0105469 11.4434 0 9 0Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/social-icons/Instagram.tsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 4.37695C6.44766 4.37695 4.37695 6.44766 4.37695 9C4.37695 11.5523 6.44766 13.623 9 13.623C11.5523 13.623 13.623 11.5523 13.623 9C13.623 6.44766 11.5523 4.37695 9 4.37695ZM9 11.9988C7.34414 11.9988 6.00117 10.6559 6.00117 9C6.00117 7.34414 7.34414 6.00117 9 6.00117C10.6559 6.00117 11.9988 7.34414 11.9988 9C11.9988 10.6559 10.6559 11.9988 9 11.9988Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/social-icons/Instagram.tsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14.8852 4.19411C14.8852 4.79177 14.4 5.27341 13.8059 5.27341C13.2082 5.27341 12.7266 4.78825 12.7266 4.19411C12.7266 3.59645 13.2117 3.11481 13.8059 3.11481C14.4 3.11481 14.8852 3.59997 14.8852 4.19411Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/social-icons/Instagram.tsx",
                    lineNumber: 43,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/social-icons/Instagram.tsx",
            lineNumber: 40,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const InstagramFive = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "19",
            viewBox: "0 0 20 19",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.2426 4.82562H14.2496M5.27195 1H13.8159C16.1752 1 18.0878 2.90279 18.0878 5.25V13.75C18.0878 16.0972 16.1752 18 13.8159 18H5.27195C2.91262 18 1 16.0972 1 13.75V5.25C1 2.90279 2.91262 1 5.27195 1ZM12.9615 8.96482C13.0669 9.67223 12.9455 10.3947 12.6144 11.0295C12.2833 11.6643 11.7595 12.179 11.1174 12.5005C10.4753 12.8221 9.74767 12.934 9.03796 12.8204C8.32825 12.7067 7.67263 12.3734 7.16433 11.8677C6.65603 11.362 6.32096 10.7098 6.20675 10.0037C6.09255 9.29764 6.20504 8.57373 6.52823 7.93494C6.85141 7.29615 7.36883 6.775 8.00688 6.44563C8.64494 6.11625 9.37115 5.99542 10.0822 6.10032C10.8075 6.20732 11.479 6.54356 11.9975 7.05938C12.516 7.5752 12.854 8.24324 12.9615 8.96482Z",
                stroke: "currentcolor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/social-icons/Instagram.tsx",
                lineNumber: 52,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/social-icons/Instagram.tsx",
            lineNumber: 51,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
}),
"[project]/src/svg/social-icons/Facebook.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FacebookFour",
    ()=>FacebookFour,
    "FacebookSvg",
    ()=>FacebookSvg,
    "FacebookThree",
    ()=>FacebookThree,
    "FacebookTwo",
    ()=>FacebookTwo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const FacebookSvg = ({ width = "8", height = "15", color = "currentcolor" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: width,
            height: height,
            viewBox: "0 0 8 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 0H5.81818C4.85376 0 3.92883 0.383116 3.24688 1.06507C2.56493 1.74702 2.18182 2.67194 2.18182 3.63636V5.81818H0V8.72727H2.18182V14.5455H5.09091V8.72727H7.27273L8 5.81818H5.09091V3.63636C5.09091 3.44348 5.16753 3.25849 5.30392 3.1221C5.44031 2.98571 5.6253 2.90909 5.81818 2.90909H8V0Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/svg/social-icons/Facebook.tsx",
                lineNumber: 11,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/social-icons/Facebook.tsx",
            lineNumber: 10,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const FacebookTwo = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "12",
            height: "16",
            viewBox: "0 0 12 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M1.82727 6.83333C1.14284 6.83333 1 6.96763 1 7.61111V8.77778C1 9.42126 1.14284 9.55556 1.82727 9.55556H3.48182V14.2222C3.48182 14.8657 3.62466 15 4.30909 15H5.96364C6.64807 15 6.79091 14.8657 6.79091 14.2222V9.55556H8.64871C9.1678 9.55556 9.30155 9.4607 9.44416 8.99145L9.7987 7.82478C10.043 7.02095 9.89246 6.83333 9.00326 6.83333H6.79091V4.88889C6.79091 4.45933 7.16129 4.11111 7.61818 4.11111H9.97273C10.6572 4.11111 10.8 3.97681 10.8 3.33333V1.77778C10.8 1.1343 10.6572 1 9.97273 1H7.61818C5.33373 1 3.48182 2.74111 3.48182 4.88889V6.83333H1.82727Z",
                stroke: "currentcolor",
                strokeWidth: "1.5",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/social-icons/Facebook.tsx",
                lineNumber: 21,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/social-icons/Facebook.tsx",
            lineNumber: 20,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const FacebookThree = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 0C4.02948 0 0 4.02948 0 9C0 13.2206 2.90592 16.7623 6.82596 17.735V11.7504H4.97016V9H6.82596V7.81488C6.82596 4.75164 8.21232 3.3318 11.2198 3.3318C11.79 3.3318 12.7739 3.44376 13.1764 3.55536V6.04836C12.964 6.02604 12.595 6.01488 12.1367 6.01488C10.661 6.01488 10.0908 6.57396 10.0908 8.02728V9H13.0306L12.5255 11.7504H10.0908V17.9341C14.5472 17.3959 18.0004 13.6015 18.0004 9C18 4.02948 13.9705 0 9 0Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/svg/social-icons/Facebook.tsx",
                lineNumber: 31,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/social-icons/Facebook.tsx",
            lineNumber: 30,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const FacebookFour = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "17",
            viewBox: "0 0 11 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M1.77219 6.41667C1.13333 6.41667 1 6.54137 1 7.13889V8.22222C1 8.81974 1.13333 8.94444 1.77219 8.94444H3.31657V13.2778C3.31657 13.8753 3.4499 14 4.08876 14H5.63314C6.272 14 6.40533 13.8753 6.40533 13.2778V8.94444H8.13944C8.62396 8.94444 8.74881 8.85636 8.88192 8.42063L9.21286 7.3373C9.44088 6.59088 9.30037 6.41667 8.47038 6.41667H6.40533V4.61111C6.40533 4.21224 6.75106 3.88889 7.17752 3.88889H9.3753C10.0142 3.88889 10.1475 3.76419 10.1475 3.16667V1.72222C10.1475 1.1247 10.0142 1 9.3753 1H7.17752C5.04518 1 3.31657 2.61675 3.31657 4.61111V6.41667H1.77219Z",
                stroke: "currentcolor",
                strokeWidth: "1.5",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/social-icons/Facebook.tsx",
                lineNumber: 40,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/social-icons/Facebook.tsx",
            lineNumber: 39,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
}),
"[project]/src/svg/social-icons/Dribbble.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DribbbleSvg",
    ()=>DribbbleSvg,
    "DribbleThree",
    ()=>DribbleThree,
    "DribbleTwo",
    ()=>DribbleTwo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const DribbbleSvg = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17.0138 2.87277C15.1874 4.36454 13.1968 5.57777 11.0848 6.47955C9.94847 4.3638 8.51963 2.36576 6.82999 0.522502C7.82783 0.188747 8.8924 0 10.0023 0C12.7337 0 15.2087 1.09776 17.0138 2.87277ZM10.2808 8.568C10.5544 9.14898 10.8017 9.74226 11.0344 10.3405C7.66488 11.4562 4.71891 13.777 2.88098 17.021C1.11008 15.2263 0.0130078 12.7665 0 10.0482C3.59655 10.2482 7.07406 9.7155 10.2808 8.568ZM11.8286 7.95905C12.1251 8.59554 12.3901 9.24257 12.6392 9.89429C15.0786 9.38379 17.6081 9.50581 19.987 10.2488C19.9883 10.2152 19.9906 10.1818 19.993 10.1484C19.9965 10.0979 20 10.0475 20 9.99604C20 7.80529 19.287 5.78452 18.0913 4.13653C16.1984 5.68777 14.0955 6.98181 11.8286 7.95905ZM14.5302 18.9097C14.4017 16.3992 13.9669 13.9032 13.2003 11.4857C15.3995 11.0609 17.6654 11.2146 19.8146 11.9447C19.2125 14.9944 17.2227 17.5399 14.5302 18.9097ZM9.52041 7.07801C8.36308 4.96775 6.91369 3.00548 5.21003 1.22348C3.87629 1.95406 2.72673 2.97919 1.84877 4.22085C0.970855 5.46255 0.387707 6.88808 0.143638 8.38902C3.37092 8.56226 6.54318 8.11226 9.52041 7.07801ZM10.66 12.2447C10.9667 12.1177 11.2793 12.0132 11.5918 11.9107C12.3766 14.3627 12.8046 16.9378 12.8852 19.5735C11.9495 19.8562 10.9773 19.9999 9.99991 20C7.823 20 5.81506 19.297 4.17267 18.116C5.58381 15.468 7.84975 13.4082 10.66 12.2447Z",
                fill: "currentcolor"
            }, void 0, false, {
                fileName: "[project]/src/svg/social-icons/Dribbble.tsx",
                lineNumber: 7,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/social-icons/Dribbble.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const DribbleTwo = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.9989 10.0113C16.2575 9.87227 15.4949 9.7998 14.7168 9.7998C10.435 9.7998 6.62665 11.9938 4.19922 15.3997M14.5997 3.39941C12.0962 6.33329 8.33416 8.19931 4.12763 8.19931C3.05145 8.19931 2.00436 8.07718 1 7.84627M11.0941 17.0005C11.2946 16.0293 11.3999 15.0235 11.3999 13.9931C11.3999 8.94036 8.86738 4.47788 5 1.80078M16.9997 8.99983C16.9997 13.418 13.418 16.9997 8.99983 16.9997C4.58165 16.9997 1 13.418 1 8.99983C1 4.58165 4.58165 1 8.99983 1C13.418 1 16.9997 4.58165 16.9997 8.99983Z",
                stroke: "currentcolor",
                strokeWidth: "1.5",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/social-icons/Dribbble.tsx",
                lineNumber: 17,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/social-icons/Dribbble.tsx",
            lineNumber: 16,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const DribbleThree = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "19",
            height: "19",
            viewBox: "0 0 19 19",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17.9994 10.5256C17.2116 10.3786 16.4014 10.302 15.5746 10.302C11.025 10.302 6.97863 12.6212 4.39943 16.2214M15.45 3.53634C12.79 6.63763 8.79271 8.61014 4.32318 8.61014C3.17971 8.61014 2.06716 8.48103 1 8.23695M11.7254 17.9135C11.9384 16.8869 12.0503 15.8237 12.0503 14.7345C12.0503 9.39347 9.35944 4.67635 5.25026 1.84649M18 9.45632C18 14.1266 14.1944 17.9126 9.5 17.9126C4.80558 17.9126 1 14.1266 1 9.45632C1 4.78603 4.80558 1 9.5 1C14.1944 1 18 4.78603 18 9.45632Z",
                stroke: "currentcolor",
                strokeWidth: "1.5",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/social-icons/Dribbble.tsx",
                lineNumber: 26,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/social-icons/Dribbble.tsx",
            lineNumber: 25,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
}),
"[project]/src/svg/social-icons/Twitter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TwitterFour",
    ()=>TwitterFour,
    "TwitterSvg",
    ()=>TwitterSvg,
    "TwitterThree",
    ()=>TwitterThree,
    "TwitterTwo",
    ()=>TwitterTwo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const TwitterSvg = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.4507 0.5H11.2908L7.27076 5.15949L12 11.5H8.29704L5.39675 7.65451L2.07815 11.5H0.236963L4.53678 6.51615L0 0.5H3.79697L6.41858 4.01492L9.4507 0.5ZM8.8049 10.3831H9.8245L3.24294 1.55826H2.1488L8.8049 10.3831Z",
                fill: "currentcolor"
            }, void 0, false, {
                fileName: "[project]/src/svg/social-icons/Twitter.tsx",
                lineNumber: 7,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/social-icons/Twitter.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const TwitterTwo = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "13",
            viewBox: "0 0 14 13",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.41177 0H0L5.23083 6.87316L0.334618 12.6389H2.59681L6.29998 8.27809L9.58823 12.5988H14L8.6172 5.52593L8.62673 5.53813L13.2614 0.0802914H10.9992L7.55741 4.13336L4.41177 0ZM2.43522 1.20371H3.80866L11.5648 11.395H10.1913L2.43522 1.20371Z",
                fill: "currentcolor"
            }, void 0, false, {
                fileName: "[project]/src/svg/social-icons/Twitter.tsx",
                lineNumber: 16,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/social-icons/Twitter.tsx",
            lineNumber: 15,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const TwitterThree = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "16",
            viewBox: "0 0 18 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.7447 0.427734H16.2748L10.7473 6.74535L17.25 15.3422H12.1584L8.17053 10.1283L3.60746 15.3422H1.07582L6.98808 8.58481L0.75 0.427734H5.97083L9.57555 5.19348L13.7447 0.427734ZM12.8567 13.8278H14.2587L5.20905 1.86258H3.7046L12.8567 13.8278Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/svg/social-icons/Twitter.tsx",
                lineNumber: 25,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/social-icons/Twitter.tsx",
            lineNumber: 24,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const TwitterFour = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "17",
            viewBox: "0 0 18 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.67227 0H0L6.72535 8.79151L0.430223 16.1665H3.33876L8.09997 10.5886L12.3277 16.1153H18L11.0793 7.06826L11.0915 7.08386L17.0504 0.102701H14.1418L9.71667 5.28701L5.67227 0ZM3.131 1.53968H4.89685L14.869 14.5755H13.1032L3.131 1.53968Z",
                fill: "currentcolor"
            }, void 0, false, {
                fileName: "[project]/src/svg/social-icons/Twitter.tsx",
                lineNumber: 34,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/social-icons/Twitter.tsx",
            lineNumber: 33,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
}),
"[project]/src/svg/VideoPlayIcons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoPlayIcon",
    ()=>VideoPlayIcon,
    "VideoPlayIconFour",
    ()=>VideoPlayIconFour,
    "VideoPlayIconThree",
    ()=>VideoPlayIconThree,
    "VideoPlayIconTwo",
    ()=>VideoPlayIconTwo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const VideoPlayIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "24",
            viewBox: "0 0 20 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 12L0.5 23.2583V0.74167L20 12Z",
                fill: "currentcolor"
            }, void 0, false, {
                fileName: "[project]/src/svg/VideoPlayIcons.tsx",
                lineNumber: 7,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/VideoPlayIcons.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const VideoPlayIconTwo = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "24",
            viewBox: "0 0 20 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 12L0.5 23.2583V0.74167L20 12Z",
                fill: "currentcolor"
            }, void 0, false, {
                fileName: "[project]/src/svg/VideoPlayIcons.tsx",
                lineNumber: 16,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/VideoPlayIcons.tsx",
            lineNumber: 15,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const VideoPlayIconThree = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "14",
            height: "18",
            viewBox: "0 0 14 18",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 1.83165C-1.81031e-08 1.04049 0.875246 0.562645 1.54076 0.990474L12.6915 8.15881C13.3038 8.55245 13.3038 9.44753 12.6915 9.84117L1.54076 17.0095C0.875247 17.4373 3.46149e-07 16.9595 3.28046e-07 16.1683L0 1.83165Z",
                fill: "#0E0F11"
            }, void 0, false, {
                fileName: "[project]/src/svg/VideoPlayIcons.tsx",
                lineNumber: 25,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/VideoPlayIcons.tsx",
            lineNumber: 24,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const VideoPlayIconFour = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "23",
            height: "25",
            viewBox: "0 0 23 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    filter: "url(#filter0_d_2126_58)",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4.66016 1.73202C4.66016 0.962222 5.49349 0.481096 6.16016 0.865996L18.1602 7.7942C18.8268 8.1791 18.8268 9.14135 18.1602 9.52625L6.16016 16.4545C5.49349 16.8394 4.66016 16.3582 4.66016 15.5884L4.66016 1.73202Z",
                        fill: "black"
                    }, void 0, false, {
                        fileName: "[project]/src/svg/VideoPlayIcons.tsx",
                        lineNumber: 35,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/svg/VideoPlayIcons.tsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: "filter0_d_2126_58",
                        x: "0.660156",
                        y: "0.73053",
                        width: "22",
                        height: "23.8594",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }, void 0, false, {
                                fileName: "[project]/src/svg/VideoPlayIcons.tsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }, void 0, false, {
                                fileName: "[project]/src/svg/VideoPlayIcons.tsx",
                                lineNumber: 40,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feOffset", {
                                dy: "4"
                            }, void 0, false, {
                                fileName: "[project]/src/svg/VideoPlayIcons.tsx",
                                lineNumber: 41,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "2"
                            }, void 0, false, {
                                fileName: "[project]/src/svg/VideoPlayIcons.tsx",
                                lineNumber: 42,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                in2: "hardAlpha",
                                operator: "out"
                            }, void 0, false, {
                                fileName: "[project]/src/svg/VideoPlayIcons.tsx",
                                lineNumber: 43,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                            }, void 0, false, {
                                fileName: "[project]/src/svg/VideoPlayIcons.tsx",
                                lineNumber: 44,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_2126_58"
                            }, void 0, false, {
                                fileName: "[project]/src/svg/VideoPlayIcons.tsx",
                                lineNumber: 45,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_2126_58",
                                result: "shape"
                            }, void 0, false, {
                                fileName: "[project]/src/svg/VideoPlayIcons.tsx",
                                lineNumber: 46,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/svg/VideoPlayIcons.tsx",
                        lineNumber: 38,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/svg/VideoPlayIcons.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/VideoPlayIcons.tsx",
            lineNumber: 33,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
}),
"[project]/src/svg/testimonial-icons/RightArrow.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RightArrowIcon",
    ()=>RightArrowIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const RightArrowIcon = ({ width = "12", height = "12", strokeWidth = "1.5", viewBox = "0 0 12 12", pathValue = "M0.87085 6H10.8656M10.8656 6L5.86825 1M10.8656 6L5.86825 11" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: width,
            height: height,
            viewBox: viewBox,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: pathValue,
                stroke: "currentcolor",
                strokeWidth: strokeWidth,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/testimonial-icons/RightArrow.tsx",
                lineNumber: 8,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/testimonial-icons/RightArrow.tsx",
            lineNumber: 7,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
}),
"[project]/src/svg/testimonial-icons/LeftArrow.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeftArrowIcon",
    ()=>LeftArrowIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const LeftArrowIcon = ({ width = "12", height = "12", viewBox = "0 0 12 12", strokeWidth = "1.5", pathValue = "M10.8907 6H0.895874M0.895874 6L5.89327 1M0.895874 6L5.89327 11" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: width,
            height: height,
            viewBox: viewBox,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: pathValue,
                stroke: "currentcolor",
                strokeWidth: strokeWidth,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/testimonial-icons/LeftArrow.tsx",
                lineNumber: 8,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/testimonial-icons/LeftArrow.tsx",
            lineNumber: 7,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
}),
"[project]/src/svg/ButtonBlurFilter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonBlurFilter",
    ()=>ButtonBlurFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const ButtonBlurFilter = ({ filterId = "buttonFilter1" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "0",
        height: "0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                id: filterId,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                        in: "SourceGraphic",
                        stdDeviation: "5",
                        result: "blur"
                    }, void 0, false, {
                        fileName: "[project]/src/svg/ButtonBlurFilter.tsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                        in: "blur",
                        values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    }, void 0, false, {
                        fileName: "[project]/src/svg/ButtonBlurFilter.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                        in: "SourceGraphic",
                        in2: filterId,
                        operator: "atop"
                    }, void 0, false, {
                        fileName: "[project]/src/svg/ButtonBlurFilter.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                        in: "SourceGraphic",
                        in2: filterId
                    }, void 0, false, {
                        fileName: "[project]/src/svg/ButtonBlurFilter.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/svg/ButtonBlurFilter.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/ButtonBlurFilter.tsx",
            lineNumber: 6,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/svg/ButtonBlurFilter.tsx",
        lineNumber: 5,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/src/svg/social-icons/Linkedin.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinkedinSvg",
    ()=>LinkedinSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const LinkedinSvg = ({ width = "14", height = "14", color = "currentColor" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: width,
            height: height,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9.8001 4.2002C10.914 4.2002 11.9823 4.64269 12.7699 5.43035C13.5576 6.218 14.0001 7.28629 14.0001 8.4002V13.3002H11.2001V8.4002C11.2001 8.02889 11.0526 7.6728 10.79 7.41025C10.5275 7.1477 10.1714 7.0002 9.8001 7.0002C9.42879 7.0002 9.0727 7.1477 8.81015 7.41025C8.5476 7.6728 8.4001 8.02889 8.4001 8.4002V13.3002H5.6001V8.4002C5.6001 7.28629 6.0426 6.218 6.83025 5.43035C7.6179 4.64269 8.68619 4.2002 9.8001 4.2002Z",
                    fill: color
                }, void 0, false, {
                    fileName: "[project]/src/svg/social-icons/Linkedin.tsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2.8 4.89941H0V13.2994H2.8V4.89941Z",
                    fill: color
                }, void 0, false, {
                    fileName: "[project]/src/svg/social-icons/Linkedin.tsx",
                    lineNumber: 18,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M1.4 2.8C2.1732 2.8 2.8 2.1732 2.8 1.4C2.8 0.626801 2.1732 0 1.4 0C0.626801 0 0 0.626801 0 1.4C0 2.1732 0.626801 2.8 1.4 2.8Z",
                    fill: color
                }, void 0, false, {
                    fileName: "[project]/src/svg/social-icons/Linkedin.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/social-icons/Linkedin.tsx",
            lineNumber: 16,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
}),
"[project]/src/svg/HeroShape.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonShape",
    ()=>ButtonShape,
    "CareerShape",
    ()=>CareerShape,
    "CareerShapeThree",
    ()=>CareerShapeThree,
    "CareerShapeTwo",
    ()=>CareerShapeTwo,
    "HeroShape",
    ()=>HeroShape,
    "HeroShapeTwo",
    ()=>HeroShapeTwo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const HeroShape = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "1920",
            height: "130",
            viewBox: "0 0 1920 130",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M317.674 0.916147L-15.8393 82.1342C-21.2159 83.4435 -25 88.2597 -25 93.7935V117.029C-25 123.656 -19.6275 129.029 -13 129.029H1963C1969.63 129.029 1975 123.656 1975 117.029V43.9925C1975 36.2794 1967.83 30.5693 1960.31 32.2977L1682.73 96.1228C1676.4 97.5795 1670.06 93.7274 1668.43 87.4346L1648.28 9.56974C1646.63 3.21847 1640.19 -0.635465 1633.82 0.917341L1245.76 95.4533C1239.43 96.9954 1233.02 93.2046 1231.33 86.9132L1210.33 8.88425C1208.64 2.60589 1202.26 -1.18461 1195.93 0.335915L804.696 94.4413C798.331 95.9723 791.914 92.1194 790.273 85.7819L770.671 10.0717C769.027 3.72499 762.595 -0.128182 756.224 1.418L366.694 95.9521C360.323 97.4984 353.89 93.6446 352.247 87.2973L332.13 9.5688C330.487 3.2179 324.048 -0.636036 317.674 0.916147Z",
                fill: "#0C5752"
            }, void 0, false, {
                fileName: "[project]/src/svg/HeroShape.tsx",
                lineNumber: 7,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/HeroShape.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const HeroShapeTwo = ({ fillColor = "#FDF7F4" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "1980",
            height: "121",
            viewBox: "0 0 1980 121",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1651.4 1.13373L1970.71 75.1373C1976.15 76.3979 1980 81.2437 1980 86.8274V108.077C1980 114.74 1974.57 120.127 1967.91 120.076L11.9091 105.258C5.31738 105.208 0 99.8504 0 93.2584V24.3544C0 16.5721 7.29346 10.8483 14.8527 12.6984L339.997 92.2748C346.375 93.8356 352.822 89.9816 354.467 83.6255L373.536 9.94507C375.18 3.59379 381.62 -0.260145 387.994 1.29266L759.617 91.8242C765.947 93.3664 772.352 89.5756 774.045 83.2841L793.964 9.2801C795.654 3.00175 802.036 -0.788759 808.358 0.731769L1183.03 90.8533C1189.4 92.3843 1195.82 88.5314 1197.46 82.1939L1216.04 10.4265C1217.68 4.07977 1224.11 0.22659 1230.48 1.77277L1603.51 92.3026C1609.89 93.8489 1616.32 89.995 1617.96 83.6477L1637.07 9.81727C1638.7 3.51669 1645.06 -0.335644 1651.4 1.13373Z",
                fill: fillColor
            }, void 0, false, {
                fileName: "[project]/src/svg/HeroShape.tsx",
                lineNumber: 17,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/HeroShape.tsx",
            lineNumber: 16,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const CareerShape = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "84",
            height: "84",
            viewBox: "0 0 84 84",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M36.3761 0.5993C40.3065 8.98556 47.3237 34.898 32.8824 44.3691C25.3614 49.0997 9.4871 52.826 1.7513 31.3747C-1.16691 23.2826 5.38982 15.9009 20.5227 20.0332C29.2536 22.4173 50.3517 27.8744 60.9 44.2751C66.4672 52.9311 71.833 71.0287 69.4175 82.9721M69.4175 82.9721C70.1596 77.2054 74.079 66.0171 83.8204 67.3978M69.4175 82.9721C69.8033 79.1875 67.076 70.1737 53.0797 64.3958M49.1371 20.8349C52.611 22.1801 63.742 28.4916 67.9921 39.9344",
                stroke: "#030303",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/svg/HeroShape.tsx",
                lineNumber: 26,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/HeroShape.tsx",
            lineNumber: 25,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const CareerShapeTwo = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "123",
            height: "130",
            viewBox: "0 0 123 130",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M58.2803 1.15449C63.3023 14.3017 71.049 54.3533 48.1082 67.0973C36.1831 73.4283 11.7107 77.3064 2.37778 43.9355C-1.14293 31.3468 9.61622 20.8908 32.0893 28.8395C45.055 33.4255 76.4207 44.0467 90.5787 70.0771C98.0511 83.8154 104.166 111.84 99.1745 129.671M99.1745 129.671C100.942 121.014 108.128 104.495 122.737 107.673M99.1745 129.671C100.181 123.978 97.0522 110.014 76.485 99.698M75.3644 33.2431C80.479 35.6688 96.6446 46.4742 101.81 64.2891",
                stroke: "black",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/svg/HeroShape.tsx",
                lineNumber: 35,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/HeroShape.tsx",
            lineNumber: 34,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const CareerShapeThree = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "109",
            height: "109",
            viewBox: "0 0 109 109",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M46.8918 0.652597C52.0111 11.5756 61.1509 45.3262 42.3414 57.6622C32.5453 63.8237 11.8693 68.6772 1.79348 40.7372C-2.00745 30.1973 6.53261 20.5828 26.243 25.965C37.6149 29.0703 65.0949 36.1781 78.8339 57.5398C86.0851 68.8141 93.074 92.3859 89.9278 107.942M89.9278 107.942C90.8943 100.431 95.9994 85.8585 108.687 87.6568M89.9278 107.942C90.4304 103.013 86.878 91.2724 68.6481 83.7468M63.5129 27.0092C68.0375 28.7613 82.5356 36.982 88.0712 51.886",
                stroke: "black",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/svg/HeroShape.tsx",
                lineNumber: 44,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/HeroShape.tsx",
            lineNumber: 43,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const ButtonShape = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "22",
            height: "21",
            viewBox: "0 0 22 21",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1.95047 15.9635C0.349769 15.5874 0.171812 13.4796 1.68557 12.8255L1.93099 12.7195C6.64382 10.6828 10.2834 6.75878 11.9603 1.90627C12.481 0.397291 14.6914 0.346013 15.2509 1.82979L21.2703 17.8126C21.3776 18.0967 21.4017 18.4043 21.34 18.7025C21.2783 19.0007 21.133 19.2781 20.9199 19.5049C20.7068 19.7317 20.4338 19.8993 20.1304 19.9897C19.827 20.0801 19.5047 20.0898 19.198 20.0178L1.95047 15.9635Z",
                fill: "#FFF669"
            }, void 0, false, {
                fileName: "[project]/src/svg/HeroShape.tsx",
                lineNumber: 53,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/HeroShape.tsx",
            lineNumber: 52,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
}),
"[project]/src/svg/social-icons/Behance.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BehanceSvg",
    ()=>BehanceSvg,
    "BehanceTwoSvg",
    ()=>BehanceTwoSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const BehanceSvg = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "22",
            height: "15",
            viewBox: "0 0 22 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M0 13.9496V0.280864C0 0.147119 0.0401234 0.0802467 0.133745 0.0668723C0.374485 0.0534978 0.748969 0.0401238 1.2572 0.0401238C1.76543 0.0401238 2.30041 0.0267492 2.88888 0.0133748C3.47736 3.05474e-07 4.01234 0 4.50719 0C5.68414 0 6.62036 0.133745 7.31583 0.387859C7.91751 0.588278 8.46614 0.92203 8.92076 1.3642C9.26701 1.71239 9.52396 2.13911 9.66973 2.60802C9.79256 2.99291 9.85571 3.39434 9.85698 3.79835C9.8665 4.22723 9.79386 4.65397 9.64298 5.05554C9.52523 5.3876 9.34853 5.69569 9.12138 5.96501C8.96005 6.17342 8.76579 6.35412 8.54628 6.49999C8.85275 6.66346 9.13987 6.86085 9.40224 7.08846C9.73972 7.38682 10.0128 7.7509 10.2047 8.15842C10.4462 8.67728 10.5652 9.2447 10.5524 9.81685C10.5641 10.637 10.3108 11.4391 9.83023 12.1039C9.30009 12.8038 8.58078 13.3375 7.75719 13.6419C6.8611 14.0031 5.79114 14.1903 4.53394 14.1903H3.11625C2.66152 14.1903 2.24691 14.1903 1.87242 14.1769C1.49794 14.1636 1.16358 14.1635 0.882714 14.1502C0.60185 14.1368 0.36111 14.1368 0.160493 14.1368C0.0534974 14.1368 0 14.0699 0 13.9496ZM2.90226 2.5679V5.56377H4.36007C4.74793 5.56377 5.12242 5.57715 5.4969 5.59052C5.76638 5.59072 6.03519 5.6176 6.29937 5.67077C6.48745 5.50754 6.64583 5.31296 6.76748 5.09567C6.89566 4.82881 6.95978 4.53571 6.95472 4.2397C6.96936 3.90074 6.87052 3.56658 6.67385 3.29012C6.46393 3.03476 6.18556 2.84455 5.87139 2.74176C5.43421 2.60668 4.978 2.54345 4.52057 2.55452H3.89197C3.70472 2.55452 3.53086 2.55452 3.38374 2.5679C3.23662 2.55452 3.07612 2.5679 2.90226 2.5679ZM2.90226 8.09155V11.6492C3.143 11.6625 3.38374 11.6759 3.63785 11.6759C3.89197 11.6759 4.17283 11.6893 4.52057 11.6893C5.04837 11.7005 5.57512 11.6374 6.08538 11.502C6.47633 11.4065 6.83011 11.1971 7.10184 10.9002C7.33605 10.6141 7.45948 10.2533 7.44957 9.88372C7.45806 9.52464 7.36035 9.17105 7.16871 8.86727C6.98147 8.5864 6.63373 8.37241 6.13888 8.23867C5.94528 8.19009 5.7487 8.15435 5.5504 8.13167C5.28822 8.10496 5.02485 8.09157 4.76131 8.09155H2.90226Z",
                    fill: "currentcolor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/social-icons/Behance.tsx",
                    lineNumber: 7,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19.2058 9.58903H14.9661C15.0172 9.9943 15.1589 10.3829 15.3807 10.7259C15.6171 11.0863 15.9577 11.3663 16.3571 11.5283C16.8994 11.7513 17.483 11.8562 18.069 11.8359C18.5353 11.8363 19.0007 11.796 19.4599 11.7156C19.8916 11.6378 20.3133 11.5122 20.7171 11.3411C20.784 11.2876 20.8241 11.3143 20.8241 11.4481V13.4944C20.8218 13.5488 20.8128 13.6027 20.7974 13.6549C20.7732 13.6924 20.7413 13.7243 20.7038 13.7485C20.2561 13.9601 19.7846 14.1173 19.2995 14.2166C18.6738 14.3369 18.0372 14.3907 17.4003 14.3771C16.3838 14.3771 15.5279 14.2166 14.8324 13.909C14.1779 13.6249 13.6004 13.1894 13.1472 12.6384C12.7238 12.1231 12.4098 11.527 12.2244 10.8864C11.8325 9.55205 11.8511 8.13071 12.2779 6.80714C12.4911 6.13749 12.8317 5.51533 13.281 4.97484C13.7232 4.44039 14.2751 4.0071 14.8993 3.70427C15.5994 3.38331 16.3627 3.22336 17.1328 3.23616C17.8459 3.21961 18.5539 3.36121 19.2058 3.65077C19.7581 3.89964 20.2405 4.28094 20.6102 4.76085C20.9657 5.21765 21.2374 5.73387 21.4126 6.28554C21.5827 6.81266 21.6685 7.36334 21.6667 7.91722C21.6667 8.23821 21.6534 8.51907 21.64 8.77319C21.6266 9.0273 21.5999 9.21455 21.5865 9.33492C21.5806 9.38124 21.5586 9.42403 21.5244 9.45581C21.4902 9.48759 21.4459 9.50634 21.3992 9.50878C21.319 9.50878 21.1719 9.52216 20.9579 9.53553C20.7004 9.56477 20.4413 9.57817 20.1822 9.57565C19.8746 9.57565 19.5536 9.58903 19.2058 9.58903ZM14.9661 7.48924H17.7881C18.1359 7.48924 18.39 7.48924 18.5505 7.47587C18.6535 7.47418 18.7563 7.46524 18.8581 7.44912V7.31537C18.8586 7.14714 18.8315 6.97996 18.7779 6.82052C18.6608 6.45456 18.4278 6.1366 18.1142 5.91464C17.8006 5.69268 17.4232 5.57876 17.0392 5.59007C16.6762 5.56971 16.3151 5.65486 15.9994 5.83523C15.6838 6.0156 15.4271 6.28348 15.2604 6.60653C15.1109 6.88107 15.0113 7.17993 14.9661 7.48924Z",
                    fill: "currentcolor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/social-icons/Behance.tsx",
                    lineNumber: 8,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M13.7225 0H21.6669V1.44444H13.7225V0Z",
                    fill: "currentcolor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/social-icons/Behance.tsx",
                    lineNumber: 9,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/social-icons/Behance.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const BehanceTwoSvg = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "11",
            viewBox: "0 0 18 11",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M1 5.5715H6.33342C7.62867 5.5715 8.61917 6.56199 8.61917 7.85725C8.61917 9.15251 7.62867 10.143 6.33342 10.143H1.76192C1.30477 10.143 1 9.83823 1 9.38108V1.76192C1 1.30477 1.30477 1 1.76192 1H5.5715C6.86676 1 7.85725 1.99049 7.85725 3.28575C7.85725 4.58101 6.86676 5.5715 5.5715 5.5715H1Z",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/src/svg/social-icons/Behance.tsx",
                    lineNumber: 18,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10.9062 7.09454H17.0016C17.0016 5.41832 15.6301 4.04688 13.9539 4.04688C12.2777 4.04688 10.9062 5.41832 10.9062 7.09454ZM10.9062 7.09454C10.9062 8.77076 12.2777 10.1422 13.9539 10.1422H15.2492",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/social-icons/Behance.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16.1125 1.44434H11.668",
                    stroke: "currentColor",
                    strokeWidth: "1.2",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/social-icons/Behance.tsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/social-icons/Behance.tsx",
            lineNumber: 17,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
}),
"[project]/src/svg/social-icons/Google.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GoogleIcon",
    ()=>GoogleIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const GoogleIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "38",
            height: "38",
            viewBox: "0 0 38 38",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18.9995 15.5454V22.9036H29.2249C28.7759 25.27 27.4285 27.2737 25.4076 28.6209L31.5739 33.4055C35.1667 30.0893 37.2394 25.2183 37.2394 19.432C37.2394 18.0847 37.1185 16.7891 36.8939 15.5456L18.9995 15.5454Z",
                    fill: "#4285F4"
                }, void 0, false, {
                    fileName: "[project]/src/svg/social-icons/Google.tsx",
                    lineNumber: 7,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8.35164 22.6162L6.96089 23.6808L2.03809 27.5153C5.16444 33.7161 11.5721 37.9998 18.9994 37.9998C24.1292 37.9998 28.4301 36.3071 31.5738 33.4054L25.4075 28.6208C23.7147 29.7608 21.5556 30.4517 18.9994 30.4517C14.0594 30.4517 9.86224 27.1181 8.3594 22.6272L8.35164 22.6162Z",
                    fill: "#34A853"
                }, void 0, false, {
                    fileName: "[project]/src/svg/social-icons/Google.tsx",
                    lineNumber: 8,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2.03803 10.4846C0.74265 13.0409 0 15.9255 0 19C0 22.0744 0.74265 24.959 2.03803 27.5153C2.03803 27.5325 8.35996 22.6098 8.35996 22.6098C7.97996 21.4699 7.75535 20.2608 7.75535 18.9998C7.75535 17.7387 7.97996 16.5297 8.35996 15.3897L2.03803 10.4846Z",
                    fill: "#FBBC05"
                }, void 0, false, {
                    fileName: "[project]/src/svg/social-icons/Google.tsx",
                    lineNumber: 9,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18.9998 7.56545C21.798 7.56545 24.2852 8.5327 26.2716 10.3982L31.7124 4.95734C28.4133 1.88284 24.1298 0 18.9998 0C11.5725 0 5.16444 4.26636 2.03809 10.4846L8.35982 15.39C9.86246 10.8991 14.0598 7.56545 18.9998 7.56545Z",
                    fill: "#EA4335"
                }, void 0, false, {
                    fileName: "[project]/src/svg/social-icons/Google.tsx",
                    lineNumber: 10,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/social-icons/Google.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
}),
"[project]/src/svg/social-icons/YouTube.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "YouTubeSvg",
    ()=>YouTubeSvg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const YouTubeSvg = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "14",
            viewBox: "0 0 18 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12.75 13H5.25C3 13 1.5 11.5 1.5 9.25V4.75C1.5 2.5 3 1 5.25 1H12.75C15 1 16.5 2.5 16.5 4.75V9.25C16.5 11.5 15 13 12.75 13Z",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/svg/social-icons/YouTube.tsx",
                    lineNumber: 7,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8.70676 5.14837L10.8006 6.40465C11.5543 6.90716 11.5543 7.66093 10.8006 8.16344L8.70676 9.41972C7.86923 9.92224 7.19922 9.50348 7.19922 8.5822V6.06964C7.19922 4.98086 7.86923 4.64585 8.70676 5.14837Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/social-icons/YouTube.tsx",
                    lineNumber: 8,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/social-icons/YouTube.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
}),
"[project]/src/svg/MenubarIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenubarIcon",
    ()=>MenubarIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const MenubarIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "8",
            viewBox: "0 0 24 8",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M0 0H14V1.5H0V0Z",
                    fill: "currentcolor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/MenubarIcon.tsx",
                    lineNumber: 7,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M0 6H24V7.5H0V6Z",
                    fill: "currentcolor"
                }, void 0, false, {
                    fileName: "[project]/src/svg/MenubarIcon.tsx",
                    lineNumber: 8,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/MenubarIcon.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
}),
"[project]/src/svg/PopularIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopularIcon",
    ()=>PopularIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const PopularIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "12",
            height: "16",
            viewBox: "0 0 12 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8.97633 6.39783C8.97633 6.39783 8.85614 7.19905 6.37234 10.404C4.04077 13.4246 7.41393 15.7241 7.81455 15.9885C7.83858 16.0045 7.86262 16.0045 7.89467 15.9885C8.4395 15.652 14.5048 11.75 8.97633 6.39783Z",
                    fill: "#0E0F11"
                }, void 0, false, {
                    fileName: "[project]/src/svg/PopularIcon.tsx",
                    lineNumber: 7,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7.05299 4.62712C7.05299 2.7843 6.33189 1.10172 5.61078 0.140249C5.37041 -0.100119 4.9698 -0.0199964 4.88968 0.300494C4.56919 1.50233 3.60771 4.06626 1.28416 7.11092C-1.68038 10.9568 1.04379 15.1232 3.84808 15.9244C5.37041 16.325 3.44747 15.1232 3.2071 12.6394C2.96673 9.5146 7.05299 7.19105 7.05299 4.62712Z",
                    fill: "#0E0F11"
                }, void 0, false, {
                    fileName: "[project]/src/svg/PopularIcon.tsx",
                    lineNumber: 8,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/PopularIcon.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
}),
"[project]/src/svg/SearchIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchIcon",
    ()=>SearchIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const SearchIcon = ({ width = "20", height = "20", strokeColor = "#191919" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: width,
            height: height,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.0004 18.9999L14.6504 14.6499M17.0001 9.00004C17.0001 13.4183 13.4183 17.0001 9.00004 17.0001C4.58174 17.0001 1 13.4183 1 9.00004C1 4.58174 4.58174 1 9.00004 1C13.4183 1 17.0001 4.58174 17.0001 9.00004Z",
                stroke: strokeColor,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/svg/SearchIcon.tsx",
                lineNumber: 13,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/svg/SearchIcon.tsx",
            lineNumber: 12,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
}),
"[project]/src/svg/FooterShape.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const FooterShape = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "ai-footer-widget-shape",
            width: "140",
            height: "16",
            viewBox: "0 0 140 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M134.682 14.3285C75.5874 -5.28341 23.8386 7.03105 5.69718 14.1975C4.12544 14.8184 1.89423 16.6129 0.713634 15.7863C-0.466967 14.9597 -0.149892 11.8251 1.42184 11.2042C21.4221 3.30339 76.2238 -9.39871 138.198 11.0732C139.907 11.5837 140.506 14.6875 139.535 15.5865C138.564 16.4854 136.392 14.8391 134.682 14.3285Z",
                    fill: "url(#paint0_linear_6113_4904)"
                }, void 0, false, {
                    fileName: "[project]/src/svg/FooterShape.tsx",
                    lineNumber: 7,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "paint0_linear_6113_4904",
                        x1: "7",
                        y1: "-3.02613e-07",
                        x2: "88.2176",
                        y2: "79.7561",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0",
                                stopColor: "#9968FF"
                            }, void 0, false, {
                                fileName: "[project]/src/svg/FooterShape.tsx",
                                lineNumber: 10,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0.49",
                                stopColor: "#FF6CB2"
                            }, void 0, false, {
                                fileName: "[project]/src/svg/FooterShape.tsx",
                                lineNumber: 11,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#FFAF56"
                            }, void 0, false, {
                                fileName: "[project]/src/svg/FooterShape.tsx",
                                lineNumber: 12,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/svg/FooterShape.tsx",
                        lineNumber: 9,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/svg/FooterShape.tsx",
                    lineNumber: 8,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/svg/FooterShape.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = FooterShape;
}),
"[project]/src/svg/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$ArrowIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/ArrowIcons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$StarIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/StarIcons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$testimonial$2d$icons$2f$QuoteIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/testimonial-icons/QuoteIcons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$EmailIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/EmailIcons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$FeaturesIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/FeaturesIcons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$CrossIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/CrossIcons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$ChooseIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/ChooseIcons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$CheckIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/CheckIcons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$social$2d$icons$2f$Instagram$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/social-icons/Instagram.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$social$2d$icons$2f$Facebook$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/social-icons/Facebook.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$social$2d$icons$2f$Dribbble$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/social-icons/Dribbble.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$social$2d$icons$2f$Twitter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/social-icons/Twitter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$VideoPlayIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/VideoPlayIcons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$testimonial$2d$icons$2f$RightArrow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/testimonial-icons/RightArrow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$testimonial$2d$icons$2f$LeftArrow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/testimonial-icons/LeftArrow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$ButtonBlurFilter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/ButtonBlurFilter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$social$2d$icons$2f$Linkedin$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/social-icons/Linkedin.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$HeroShape$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/HeroShape.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$social$2d$icons$2f$Behance$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/social-icons/Behance.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$social$2d$icons$2f$Google$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/social-icons/Google.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$social$2d$icons$2f$YouTube$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/social-icons/YouTube.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$MenubarIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/MenubarIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$PopularIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/PopularIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$SearchIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/SearchIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$FooterShape$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/FooterShape.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/src/data/header-menu/mobileMenuData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Menu data structure
const mobileMenuData = [
    {
        id: 1,
        title: "Services",
        link: "/",
        megaMenu: true
    },
    {
        id: 2,
        title: "Website",
        link: "#",
        megaMenu: true
    },
    {
        id: 3,
        title: "Marketing",
        link: "/portfolio-metro-light",
        megaMenu: true
    },
    {
        id: 4,
        title: "Showcase",
        link: "/blog-list-light",
        megaMenu: false
    },
    {
        id: 5,
        title: "About Us",
        link: "/shop-modern-light",
        megaMenu: false
    },
    {
        id: 6,
        title: "Pricing",
        link: "/contact",
        megaMenu: false
    },
    {
        id: 7,
        title: "Contact",
        link: "/contact",
        megaMenu: false
    }
];
const __TURBOPACK__default__export__ = mobileMenuData;
}),
"[project]/src/layouts/subComponents/MainMobileMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$header$2d$menu$2f$mobileMenuData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/header-menu/mobileMenuData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
;
;
const MainMobileMenu = ()=>{
    const [activeMenu, setActiveMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeSubmenu, setActiveSubmenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleMenu = (id)=>{
        if (activeMenu === id) {
            setActiveMenu(null);
        } else {
            setActiveMenu(id);
            setActiveSubmenu(null);
        }
    };
    const toggleSubmenu = (index)=>{
        if (activeSubmenu === index) {
            setActiveSubmenu(null);
        } else {
            setActiveSubmenu(index);
        }
    };
    // Returns CSS class based on tag like 'Popular', 'Trending', or 'Hot'
    const getTagClass = (tag)=>{
        switch(tag){
            case 'Popular':
                return 'pop';
            case 'Trending':
                return 'new';
            case 'Hot':
                return 'hot';
            default:
                return '';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$header$2d$menu$2f$mobileMenuData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].map((menuItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: `has-dropdown ${activeMenu === menuItem.id ? 'active' : ''}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: menuItem.link,
                            onClick: (e)=>{
                                e.preventDefault();
                                toggleMenu(menuItem.id);
                            },
                            children: menuItem.title
                        }, void 0, false, {
                            fileName: "[project]/src/layouts/subComponents/MainMobileMenu.tsx",
                            lineNumber: 42,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        menuItem.megaMenu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tp-megamenu-wrapper mega-menu megamenu-white-bg",
                            style: {
                                display: `${activeMenu === menuItem.id ? 'block' : 'none'}`
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row gx-0",
                                children: [
                                    menuItem.columns?.map((column, colIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: menuItem.image ? "col-xl-2" : "col-xl-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tp-megamenu-list",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "tp-megamenu-title",
                                                        children: column.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/layouts/subComponents/MainMobileMenu.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        children: column.links.map((link, linkIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: link.link,
                                                                    children: [
                                                                        link.title,
                                                                        link.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: getTagClass(link.badge),
                                                                            children: link.badge
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/layouts/subComponents/MainMobileMenu.tsx",
                                                                            lineNumber: 62,
                                                                            columnNumber: 69
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/layouts/subComponents/MainMobileMenu.tsx",
                                                                    lineNumber: 59,
                                                                    columnNumber: 61
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, linkIndex, false, {
                                                                fileName: "[project]/src/layouts/subComponents/MainMobileMenu.tsx",
                                                                lineNumber: 58,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/layouts/subComponents/MainMobileMenu.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/layouts/subComponents/MainMobileMenu.tsx",
                                                lineNumber: 54,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, colIndex, false, {
                                            fileName: "[project]/src/layouts/subComponents/MainMobileMenu.tsx",
                                            lineNumber: 53,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    menuItem.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-xl-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tp-megamenu-list",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tp-megamenu-thumb",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: menuItem.image.src,
                                                    alt: menuItem.image.alt
                                                }, void 0, false, {
                                                    fileName: "[project]/src/layouts/subComponents/MainMobileMenu.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 53
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/layouts/subComponents/MainMobileMenu.tsx",
                                                lineNumber: 77,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/layouts/subComponents/MainMobileMenu.tsx",
                                            lineNumber: 76,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/layouts/subComponents/MainMobileMenu.tsx",
                                        lineNumber: 75,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/layouts/subComponents/MainMobileMenu.tsx",
                                lineNumber: 51,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/layouts/subComponents/MainMobileMenu.tsx",
                            lineNumber: 50,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "tp-submenu submenu",
                            style: {
                                display: `${activeMenu === menuItem.id ? 'block' : 'none'}`
                            },
                            children: menuItem.submenu?.map((subItem, subIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: subItem.submenu ? `menu-item-has-children ${activeSubmenu === subIndex ? 'active' : ''}` : "",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: subItem.link,
                                            onClick: (e)=>{
                                                if (subItem.submenu) {
                                                    e.preventDefault();
                                                    toggleSubmenu(subIndex);
                                                }
                                            },
                                            children: subItem.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/layouts/subComponents/MainMobileMenu.tsx",
                                            lineNumber: 89,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        subItem.submenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "tp-submenu submenu",
                                                style: {
                                                    display: `${activeSubmenu === subIndex ? 'block' : 'none'}`
                                                },
                                                children: subItem.submenu.map((nestedItem, nestedIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: nestedItem.link,
                                                            children: nestedItem.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/layouts/subComponents/MainMobileMenu.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 61
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, nestedIndex, false, {
                                                        fileName: "[project]/src/layouts/subComponents/MainMobileMenu.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 57
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/layouts/subComponents/MainMobileMenu.tsx",
                                                lineNumber: 100,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false)
                                    ]
                                }, subIndex, true, {
                                    fileName: "[project]/src/layouts/subComponents/MainMobileMenu.tsx",
                                    lineNumber: 88,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/layouts/subComponents/MainMobileMenu.tsx",
                            lineNumber: 86,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, menuItem.id, true, {
                    fileName: "[project]/src/layouts/subComponents/MainMobileMenu.tsx",
                    lineNumber: 41,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/layouts/subComponents/MainMobileMenu.tsx",
            lineNumber: 39,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = MainMobileMenu;
}),
"[project]/src/components/offcanvas/OffCanvasPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$1$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/img/offcanvas/offcanvas-1.jpg.mjs { IMAGE => "[project]/public/assets/img/offcanvas/offcanvas-1.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/img/offcanvas/offcanvas-2.jpg.mjs { IMAGE => "[project]/public/assets/img/offcanvas/offcanvas-2.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$3$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$3$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/img/offcanvas/offcanvas-3.jpg.mjs { IMAGE => "[project]/public/assets/img/offcanvas/offcanvas-3.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$4$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$4$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/img/offcanvas/offcanvas-4.jpg.mjs { IMAGE => "[project]/public/assets/img/offcanvas/offcanvas-4.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$logo$2f$logo$2d$black$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$logo$2f$logo$2d$black$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/img/logo/logo-black.png.mjs { IMAGE => "[project]/public/assets/img/logo/logo-black.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$logo$2f$logo$2d$white$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$logo$2f$logo$2d$white$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/img/logo/logo-white.png.mjs { IMAGE => "[project]/public/assets/img/logo/logo-white.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PhotoProviderWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/PhotoProviderWrapper.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/svg/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$CrossIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/CrossIcons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$social$2d$icons$2f$Dribbble$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/social-icons/Dribbble.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$social$2d$icons$2f$Instagram$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/social-icons/Instagram.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$subComponents$2f$MainMobileMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layouts/subComponents/MainMobileMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$social$2d$icons$2f$Behance$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/social-icons/Behance.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$social$2d$icons$2f$YouTube$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/social-icons/YouTube.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$photo$2d$view$2f$dist$2f$react$2d$photo$2d$view$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-photo-view/dist/react-photo-view.module.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const galleryImages = [
    {
        id: 1,
        imgSrc: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$1$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$1$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        id: 2,
        imgSrc: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$2$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        id: 3,
        imgSrc: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$3$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$3$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        id: 4,
        imgSrc: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$4$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$offcanvas$2f$offcanvas$2d$4$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    }
];
const OffCanvasPanel = ({ openOffcanvas, setOpenOffcanvas })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tp-offcanvas-wrapper @@class offcanvas-white-bg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tp-offcanvas-top d-flex align-items-center justify-content-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tp-offcanvas-logo",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                className: "logo-1",
                                                width: 120,
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$logo$2f$logo$2d$black$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$logo$2f$logo$2d$black$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                alt: "logo-black"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                lineNumber: 40,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                className: "logo-2",
                                                width: 120,
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$logo$2f$logo$2d$white$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$logo$2f$logo$2d$white$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                alt: "logo-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                lineNumber: 41,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                        lineNumber: 39,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                    lineNumber: 38,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tp-offcanvas-close",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setOpenOffcanvas(false),
                                        className: "tp-offcanvas-close-btn",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$CrossIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CrossIconTwo"], {}, void 0, false, {
                                            fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                            lineNumber: 46,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                        lineNumber: 45,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                    lineNumber: 44,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tp-offcanvas-main",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tp-offcanvas-content d-none d-xl-block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "tp-offcanvas-title",
                                            children: "Hello There!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                            lineNumber: 52,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                            lineNumber: 53,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                    lineNumber: 51,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tp-offcanvas-menu d-xl-none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$subComponents$2f$MainMobileMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                            lineNumber: 56,
                                            columnNumber: 34
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                        lineNumber: 56,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                    lineNumber: 55,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tp-offcanvas-gallery d-none d-xl-block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row gx-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$PhotoProviderWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            children: galleryImages.map((image)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-md-3 col-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tp-offcanvas-gallery-img fix",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$photo$2d$view$2f$dist$2f$react$2d$photo$2d$view$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhotoView"], {
                                                            src: image.imgSrc.src,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                style: {
                                                                    width: "100%",
                                                                    height: "auto"
                                                                },
                                                                src: image.imgSrc,
                                                                alt: `Gallery image${image.id}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                                lineNumber: 65,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, image.id, false, {
                                                    fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                            lineNumber: 60,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                        lineNumber: 59,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                    lineNumber: 58,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tp-offcanvas-contact",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "tp-offcanvas-title sm",
                                            children: "Information"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                            lineNumber: 74,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "tel:(+1)2345678910",
                                                        children: "(+1) 234 567 8910"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "mailto:hello@design.com",
                                                        children: "hello@design.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "#",
                                                        children: "Germany — 482 15h Street, Office 426 Berlin, De 80500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                            lineNumber: 75,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                    lineNumber: 73,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tp-offcanvas-social",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "tp-offcanvas-title sm",
                                            children: "Follow Us"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                            lineNumber: 82,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "#",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$social$2d$icons$2f$Instagram$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InstagramSvg"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 52
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "#",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$social$2d$icons$2f$Dribbble$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DribbleTwo"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                                lineNumber: 88,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "#",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$social$2d$icons$2f$Behance$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BehanceTwoSvg"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 52
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "#",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$social$2d$icons$2f$YouTube$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YouTubeSvg"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 52
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                            lineNumber: 83,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                                    lineNumber: 81,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                            lineNumber: 50,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setOpenOffcanvas(false),
                className: `body-overlay ${openOffcanvas ? "opened" : ""}`
            }, void 0, false, {
                fileName: "[project]/src/components/offcanvas/OffCanvasPanel.tsx",
                lineNumber: 102,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = OffCanvasPanel;
}),
"[project]/src/hooks/useStickyHeader.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const useStickyHeader = (offset = 20)=>{
    const [isSticky, setIsSticky] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setIsSticky(window.scrollY > offset);
        };
        // Initial check
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, [
        offset
    ]);
    return isSticky;
};
const __TURBOPACK__default__export__ = useStickyHeader;
}),
"[project]/src/data/header-menu/menuData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const headerMenuData = [
    {
        id: 1,
        // hasDropdown: true,
        active: true,
        // megaMenu: true,
        // children: true,
        title: "Services",
        // pluseIncon: true,
        link: "/service"
    },
    {
        id: 2,
        active: true,
        // children: true,
        title: "Website",
        // pluseIncon: true,
        link: "#"
    },
    {
        id: 3,
        // hasDropdown: true,
        active: true,
        // children: true,
        title: "Marketing",
        // pluseIncon: true,
        // mediumMenu: true,
        link: "#"
    },
    {
        id: 4,
        // hasDropdown: true,
        active: true,
        // megaMenu: false,
        // children: true,
        title: "Showcase",
        // pluseIncon: true,
        link: "/portfolio"
    },
    {
        id: 5,
        // hasDropdown: true,
        active: true,
        // megaMenu: false,
        // children: true,
        title: "About Us",
        // pluseIncon: true,
        link: "/about-us"
    },
    {
        id: 6,
        // hasDropdown: true,
        active: true,
        // megaMenu: false,
        // children: true,
        title: "Pricing",
        // pluseIncon: true,
        link: "/pricing"
    },
    {
        id: 7,
        // hasDropdown: true,
        active: true,
        // megaMenu: false,
        // children: true,
        title: "Contact",
        // pluseIncon: true,
        link: "/contact"
    }
];
const __TURBOPACK__default__export__ = headerMenuData;
}),
"[project]/src/components/ThemeLink.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
function ThemeLink({ href, onClick, ...props }) {
    const handleClick = (e)=>{
        onClick?.(e);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        onClick: handleClick,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ThemeLink.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/layouts/subComponents/NavMenus.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavMenus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$header$2d$menu$2f$menuData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/header-menu/menuData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ThemeLink.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function NavMenus() {
    const [hoveredMenu, setHoveredMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$header$2d$menu$2f$menuData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][0]?.id || null);
    // Renders nested submenus
    const renderSubmenu = (submenus = [])=>{
        return submenus.map((submenu, i)=>{
            if (submenu.submenus) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "menu-item-has-children",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: submenu.link || "#",
                            children: submenu.title
                        }, void 0, false, {
                            fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                            lineNumber: 18,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "tp-submenu submenu",
                            children: renderSubmenu(submenu.submenus)
                        }, void 0, false, {
                            fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                    lineNumber: 17,
                    columnNumber: 11
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: submenu.link || "#",
                    children: submenu.title
                }, void 0, false, {
                    fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                    lineNumber: 28,
                    columnNumber: 11
                }, this)
            }, i, false, {
                fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this);
        });
    };
    // Returns CSS class based on tag like 'Popular', 'Trending', or 'Hot'
    const getTagClass = (tag)=>{
        switch(tag){
            case 'Popular':
                return 'pop';
            case 'Trending':
                return 'new';
            case 'Hot':
                return 'hot';
            default:
                return '';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$header$2d$menu$2f$menuData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].map((menu)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: `has-dropdown ${menu.megaMenu || menu.smallMenu || menu.mediumMenu ? "p-static" : ""} ${hoveredMenu === menu.id ? 'active' : ''}`,
                onMouseEnter: ()=>setHoveredMenu(menu.id),
                onMouseLeave: ()=>setHoveredMenu(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: menu.link,
                        children: [
                            menu.title,
                            menu.pluseIncon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "dropdown-btn d-none"
                            }, void 0, false, {
                                fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    menu.megaMenu || menu.smallMenu || menu.mediumMenu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `tp-megamenu-wrapper ${menu.smallMenu ? "megamenu-small" : ""} mega-menu megamenu-white-bg`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row gx-0",
                            children: [
                                menu.megaMenu && menu?.submenus?.map((submenu, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-xl-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tp-megamenu-list",
                                            children: [
                                                submenu.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "tp-megamenu-title",
                                                    children: submenu.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 27
                                                }, this),
                                                submenu.megaMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    children: submenu.megaMenu.map((item, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: item.link,
                                                                children: [
                                                                    item.title,
                                                                    item.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: getTagClass(item.tag),
                                                                        children: item.tag
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                                                        lineNumber: 82,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                                                lineNumber: 79,
                                                                columnNumber: 33
                                                            }, this)
                                                        }, j, false, {
                                                            fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 31
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                            lineNumber: 71,
                                            columnNumber: 23
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                        lineNumber: 70,
                                        columnNumber: 21
                                    }, this)),
                                menu.smallMenu && menu?.submenus?.map((submenu, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-xl-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tp-megamenu-list",
                                            children: [
                                                submenu.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "tp-megamenu-title",
                                                    children: submenu.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 27
                                                }, this),
                                                submenu.megaMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    children: submenu.megaMenu.map((item, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: item.link,
                                                                children: [
                                                                    item.title,
                                                                    item.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: getTagClass(item.tag),
                                                                        children: item.tag
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                                                        lineNumber: 107,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                                                lineNumber: 104,
                                                                columnNumber: 33
                                                            }, this)
                                                        }, j, false, {
                                                            fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 31
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                            lineNumber: 96,
                                            columnNumber: 23
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                        lineNumber: 95,
                                        columnNumber: 21
                                    }, this)),
                                menu.mediumMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-xl-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row gx-0",
                                        children: [
                                            menu?.submenus?.map((submenu, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-xl-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tp-megamenu-list",
                                                        children: [
                                                            submenu.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "tp-megamenu-title",
                                                                children: submenu.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                                                lineNumber: 125,
                                                                columnNumber: 31
                                                            }, this),
                                                            submenu.megaMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                children: submenu.megaMenu.map((item, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: item.link,
                                                                            children: [
                                                                                item.title,
                                                                                item.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: getTagClass(item.tag),
                                                                                    children: item.tag
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                                                                    lineNumber: 135,
                                                                                    columnNumber: 41
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                                                            lineNumber: 132,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    }, j, false, {
                                                                        fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                                                        lineNumber: 131,
                                                                        columnNumber: 35
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 27
                                                    }, this)
                                                }, i, false, {
                                                    fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 25
                                                }, this)),
                                            menu.menuThumb?.isThumb && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-xl-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "tp-megamenu-list",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tp-megamenu-thumb",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: menu.menuThumb.thumbSrc,
                                                            alt: menu.menuThumb.thumbAlt || "",
                                                            width: 300,
                                                            height: 300
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                                lineNumber: 148,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                        lineNumber: 120,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                                    lineNumber: 119,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                            lineNumber: 66,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this) : menu.submenus ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "tp-submenu submenu",
                        children: renderSubmenu(menu.submenus)
                    }, void 0, false, {
                        fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                        lineNumber: 168,
                        columnNumber: 13
                    }, this) : null
                ]
            }, menu.id, true, {
                fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/layouts/subComponents/NavMenus.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/layouts/headers/DigitalMarketingHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$cartaloop$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$cartaloop$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/img/cartaloop/logo.png.mjs { IMAGE => "[project]/public/assets/img/cartaloop/logo.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$offcanvas$2f$OffCanvasPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/offcanvas/OffCanvasPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStickyHeader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useStickyHeader.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$subComponents$2f$NavMenus$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layouts/subComponents/NavMenus.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/svg/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$EmailIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/EmailIcons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const DigitalMarketingHeader = ()=>{
    const [openOffCanvas, setOpenOffCanvas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isSticky = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStickyHeader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(20);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "header-sticky",
                    className: `tp-header-area tp-header-ptb tp-header-blur sticky-white-bg header-transparent tp-header-3-style ${isSticky ? 'header-sticky' : ''}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container container-1750",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row align-items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-xl-12 col-lg-12 col-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tp-header-box d-flex align-items-center justify-content-between justify-content-xl-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tp-header-logo",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "logo-white",
                                                    width: 120,
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$img$2f$cartaloop$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$img$2f$cartaloop$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                    alt: "logo"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                                                    lineNumber: 29,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                                                lineNumber: 28,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                                            lineNumber: 27,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tp-header-menu tp-header-dropdown dropdown-white-bg d-none d-xl-flex",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                                className: "tp-mobile-menu-active",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layouts$2f$subComponents$2f$NavMenus$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                                                    lineNumber: 34,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                                                lineNumber: 33,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                                            lineNumber: 32,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tp-header-btn d-none d-md-flex",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                className: "tp-btn-yellow-green green-solid theme-btn-color",
                                                href: "/contact",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$EmailIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmailIconThree"], {
                                                            colorName: "currentcolor",
                                                            strokeWidth: "1.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                                                            lineNumber: 40,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                                                        lineNumber: 39,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-1",
                                                                children: "Schedule a Call"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                                                                lineNumber: 43,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-2",
                                                                children: "Schedule a Call"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                                                                lineNumber: 44,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                                                lineNumber: 38,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                                            lineNumber: 37,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tp-header-bar ml-15 d-xl-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setOpenOffCanvas(true),
                                                className: "tp-offcanvas-open-btn",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                        fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                        fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                        fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                                                        lineNumber: 52,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                                                lineNumber: 49,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                                            lineNumber: 48,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                                    lineNumber: 26,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                                lineNumber: 22,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                            lineNumber: 21,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                        lineNumber: 20,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$offcanvas$2f$OffCanvasPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                openOffcanvas: openOffCanvas,
                setOpenOffcanvas: setOpenOffCanvas
            }, void 0, false, {
                fileName: "[project]/src/layouts/headers/DigitalMarketingHeader.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = DigitalMarketingHeader;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3387aa38._.js.map