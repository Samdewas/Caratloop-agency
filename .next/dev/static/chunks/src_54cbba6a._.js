(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/plugins/tp-cursor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>cursorAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jquery/dist/jquery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/gsap-core.js [app-client] (ecmascript)");
;
;
function cursorAnimation() {
    if ("TURBOPACK compile-time truthy", 1) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("body").not(".is-mobile").hasClass("tp-magic-cursor")) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(".tp-magnetic-item").wrap('<div class="tp-magnetic-wrap"></div>');
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("a.tp-magnetic-item").length) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("a.tp-magnetic-item").addClass("not-hide-cursor");
            }
            let $mouse = {
                x: 0,
                y: 0
            }; // Cursor position
            let $pos = {
                x: 0,
                y: 0
            }; // Cursor position
            let $ratio = 0.15; // delay follow cursor
            let $active = false;
            let $ball = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("#ball");
            let $ballWidth = 14; // Ball default width
            let $ballHeight = 14; // Ball default height
            let $ballScale = 1; // Ball default scale
            let $ballOpacity = 1; // Ball default opacity
            let $ballBorderWidth = 1; // Ball default border width
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set($ball, {
                xPercent: -50,
                yPercent: -50,
                width: $ballWidth,
                height: $ballHeight,
                borderWidth: $ballBorderWidth,
                opacity: $ballOpacity
            });
            document.addEventListener("mousemove", mouseMove);
            function mouseMove(e) {
                $mouse.x = e.clientX;
                $mouse.y = e.clientY;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.add(updatePosition);
            function updatePosition() {
                if (!$active) {
                    $pos.x += ($mouse.x - $pos.x) * $ratio;
                    $pos.y += ($mouse.y - $pos.y) * $ratio;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set($ball, {
                        x: $pos.x,
                        y: $pos.y
                    });
                }
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(".tp-magnetic-wrap").mousemove(function(e) {
                parallaxCursor(e, this, 2); // magnetic ball = low number is more attractive
                callParallax(e, this);
            });
            function callParallax(e, parent) {
                parallaxIt(e, parent, parent.querySelector(".tp-magnetic-item"), 25); // magnetic area = higher number is more attractive
            }
            function parallaxIt(e, parent, target, movement) {
                var boundingRect = parent.getBoundingClientRect();
                var relX = e.clientX - boundingRect.left;
                var relY = e.clientY - boundingRect.top;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(target, {
                    duration: 0.3,
                    x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
                    y: (relY - boundingRect.height / 2) / boundingRect.height * movement,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$gsap$2d$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Power2"].easeOut
                });
            }
            function parallaxCursor(e, parent, movement) {
                var rect = parent.getBoundingClientRect();
                var relX = e.clientX - rect.left;
                var relY = e.clientY - rect.top;
                $pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
                $pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to($ball, {
                    duration: 0.3,
                    x: $pos.x,
                    y: $pos.y
                });
            }
            // Magnetic item hover.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(".tp-magnetic-wrap").on("mouseenter", function() {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to($ball, {
                    duration: 0.3,
                    scale: 2,
                    borderWidth: 1,
                    opacity: $ballOpacity
                });
                $active = true;
            }).on("mouseleave", function() {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to($ball, {
                    duration: 0.3,
                    scale: $ballScale,
                    borderWidth: $ballBorderWidth,
                    opacity: $ballOpacity
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(this.querySelector(".tp-magnetic-item"), {
                    duration: 0.3,
                    x: 0,
                    y: 0,
                    clearProps: "all"
                });
                $active = false;
            });
            // Cursor view on hover (data attribute "data-cursor="...").
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("[data-cursor]").each(function() {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this).on("mouseenter", function() {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("#ball").find(".ball-view").length === 0) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("#ball").addClass("with-blur");
                        $ball.append('<div class="ball-view"></div>');
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(".ball-view").append((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this).attr("data-cursor"));
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to($ball, {
                            duration: 0.3,
                            yPercent: -75,
                            width: 110,
                            height: 110,
                            opacity: 1,
                            borderWidth: 0,
                            zIndex: 1,
                            backdropFilter: "blur(14px)",
                            backgroundColor: "#fff",
                            boxShadow: "0px 1px 3px 0px rgba(18, 20, 32, 0.14)"
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(".ball-view", {
                            duration: 0.3,
                            scale: 1,
                            autoAlpha: 1
                        });
                    }
                }).on("mouseleave", function() {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to($ball, {
                        duration: 0.3,
                        yPercent: -50,
                        width: $ballWidth,
                        height: $ballHeight,
                        opacity: $ballOpacity,
                        borderWidth: $ballBorderWidth,
                        backgroundColor: "#000"
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(".ball-view", {
                        duration: 0.3,
                        scale: 0,
                        autoAlpha: 0,
                        clearProps: "all"
                    });
                    $ball.find(".ball-view").remove();
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this).addClass("not-hide-cursor");
            });
            // Show/hide magic cursor // 
            // Hide on hover//
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("a, button") // class "hide-cursor" is for global use.
            .not('.cursor-hide') // omit from selection.
            .on("mouseenter", function() {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to($ball, {
                    duration: 0.3,
                    scale: 0,
                    opacity: 0
                });
            }).on("mouseleave", function() {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to($ball, {
                    duration: 0.3,
                    scale: $ballScale,
                    opacity: $ballOpacity
                });
            });
            // Hide on click//
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("a").not('[target="_blank"]') // omit from selection.
            .not('.cursor-hide') // omit from selection.
            .not('[href^="#"]') // omit from selection.
            .not('[href^="mailto"]') // omit from selection.
            .not('[href^="tel"]') // omit from selection.
            .not(".lg-trigger") // omit from selection.
            .not(".tp-btn-disabled a") // omit from selection.
            .on('click', function() {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to($ball, {
                    duration: 0.3,
                    scale: 1.3,
                    autoAlpha: 0
                });
            });
            // Show/hide on document leave/enter//
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(document).on("mouseleave", function() {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to("#magic-cursor", {
                    duration: 0.3,
                    autoAlpha: 0
                });
            }).on("mouseenter", function() {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to("#magic-cursor", {
                    duration: 0.3,
                    autoAlpha: 1
                });
            });
            // Show as the mouse moves//
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(document).mousemove(function() {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to("#magic-cursor", {
                    duration: 0.3,
                    autoAlpha: 1
                });
            });
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/plugins/webgl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-this-alias */ /* eslint-disable @typescript-eslint/no-unused-expressions */ __turbopack_context__.s([
    "default",
    ()=>WebGL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jquery/dist/jquery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
;
class WebGL {
    constructor(e){
        this.scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"](), this.vertex = "varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );}", this.material = e.material, this.fragment = e.fragment, this.uniforms = e.uniforms, this.renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"](), this.width = window.innerWidth, this.height = window.innerHeight, this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setSize(this.width, this.height), this.renderer.setClearColor(2303786, 1), this.container = document.getElementById("canvas-slider"), this.images = Array.from(document.querySelectorAll(".slide-img")), this.width = this.container.offsetWidth, this.height = this.container.offsetHeight, this.container.appendChild(this.renderer.domElement), this.camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](70, window.innerWidth / window.innerHeight, 0.001, 1e3), this.camera.position.set(0, 0, 2), this.current = 0, this.textures = [], this.isRunning = !1, this.paused = !0, this.initiate(()=>{
            this.setupResize(), this.addObjects(), this.resize(), this.play();
        });
    }
    initiate(e) {
        const t = [];
        const i = this;
        this.images.forEach((e, s)=>{
            let h = new Promise((t)=>{
                i.textures[s] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]().load(e.src, t);
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
        let e = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]().load((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("#showcase-slider-holder").attr("data-pattern-img"));
        e.wrapS = e.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"], this.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
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
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector4"]()
                }
            },
            vertexShader: this.vertex,
            fragmentShader: this.fragment,
            transparent: !0,
            opacity: 1
        }), this.geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](1, 1, 2, 2), this.plane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](this.geometry, this.material), this.scene.add(this.plane);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/plugins/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$plugins$2f$tp$2d$cursor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/plugins/tp-cursor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$plugins$2f$webgl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/plugins/webgl.js [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/plugins/tp-cursor.js [app-client] (ecmascript) <export default as cursorAnimation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cursorAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$plugins$2f$tp$2d$cursor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$plugins$2f$tp$2d$cursor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/plugins/tp-cursor.js [app-client] (ecmascript)");
}),
"[project]/src/hooks/useCursorAndBackground.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCursorAndBackground",
    ()=>useCursorAndBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$plugins$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/plugins/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$plugins$2f$tp$2d$cursor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__cursorAnimation$3e$__ = __turbopack_context__.i("[project]/src/plugins/tp-cursor.js [app-client] (ecmascript) <export default as cursorAnimation>");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const useCursorAndBackground = (config = {})=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCursorAndBackground.useEffect": ()=>{
            // Only run on client side
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Base cursor class
            document.body.classList.add("tp-magic-cursor");
            // Handle background color and classes
            if (config.bgColor) {
                document.body.style.backgroundColor = `${config.bgColor}`;
            }
            if (config.customClass) {
                document.body.classList.add(config.customClass);
            }
            // Add cursor elements to DOM
            const cursorHtml = `
      <div class="tp-cursor"></div>
      <div class="tp-cursor-effect"></div>
    `;
            document.body.insertAdjacentHTML('beforeend', cursorHtml);
            // Initialize animation after a small delay to ensure DOM is ready
            setTimeout({
                "useCursorAndBackground.useEffect": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$plugins$2f$tp$2d$cursor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__cursorAnimation$3e$__["cursorAnimation"])();
                }
            }["useCursorAndBackground.useEffect"], 50);
            // Cleanup function
            return ({
                "useCursorAndBackground.useEffect": ()=>{
                    document.body.classList.remove("tp-magic-cursor");
                    // Remove cursor elements
                    document.querySelectorAll('.tp-cursor, .tp-cursor-effect').forEach({
                        "useCursorAndBackground.useEffect": (el)=>el.remove()
                    }["useCursorAndBackground.useEffect"]);
                    // Remove background classes if they exist
                    [
                        "cursor-white-bg",
                        "cursor-black-bg"
                    ].forEach({
                        "useCursorAndBackground.useEffect": (className)=>{
                            document.body.classList.remove(className);
                        }
                    }["useCursorAndBackground.useEffect"]);
                    // Remove custom class if it exists
                    if (config.customClass) {
                        document.body.classList.remove(config.customClass);
                    }
                    // Reset background color if it was set
                    if (config.bgColor) {
                        document.body.style.backgroundColor = '';
                    }
                }
            })["useCursorAndBackground.useEffect"];
        }
    }["useCursorAndBackground.useEffect"], [
        config.bgColor,
        config.customClass
    ]);
};
_s(useCursorAndBackground, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/provider/CustomCursorProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CursorAndBackgroundProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCursorAndBackground$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCursorAndBackground.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CursorAndBackgroundProvider({ children, bgColor, customClass }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCursorAndBackground$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCursorAndBackground"])({
        bgColor,
        customClass
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(CursorAndBackgroundProvider, "baObOkCV44fZmHahJuODeU8gOb4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCursorAndBackground$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCursorAndBackground"]
    ];
});
_c = CursorAndBackgroundProvider;
var _c;
__turbopack_context__.k.register(_c, "CursorAndBackgroundProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useGsapAnimation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/SplitText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
;
;
// Register GSAP plugins
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"]);
}
const fadeAnimation = ()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".tp_fade_anim").forEach((item)=>{
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
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(item, tp_anim_setting);
    });
};
const revalEffectAnimation = ()=>{
    document.querySelectorAll(".tp_reveal_anim").forEach((areveal)=>{
        const duration = areveal.getAttribute("data-duration") || 1.5;
        const onScroll = areveal.getAttribute("data-on-scroll") || 1;
        const stagger = areveal.getAttribute("data-stagger") ? parseFloat(areveal.getAttribute("data-stagger")) : 0.02;
        const delay = areveal.getAttribute("data-delay") || 0.05;
        const split = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"](areveal, {
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
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(split.chars, animConfig);
    });
};
const charAnimation = ()=>{
    const charElements = document.querySelectorAll(".tp-char-animation");
    if (charElements.length > 0) {
        const animationItems = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".tp-char-animation");
        animationItems.forEach((splitTextLine)=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
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
            const itemSplitted = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"](splitTextLine, {
                type: "chars, words"
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(splitTextLine, {
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
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia().add("(min-width: 991px)", ()=>{
        document.querySelectorAll(".title-box").forEach((box)=>{
            const rightElements = box.querySelectorAll('.tp-text-right-scroll');
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
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
    const sv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    sv.add("(min-width: 1199px)", ()=>{
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
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
    const mm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    mm.add("(min-width: 1200px)", ()=>{
        const wrap = document.querySelector(".tp-funfact-panel-wrap");
        if (!wrap) return;
        const sections = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".tp-funfact-panel");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(sections, {
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
    const pr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    pr.add("(min-width: 1199px)", ()=>{
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
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
    const split = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"](`.${className}`, {
        type: "lines"
    });
    split.lines.forEach((target)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(target, {
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
    const vd = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    vd.add("(min-width: 1199px)", ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
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
    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
    const hr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
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
    const pw = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    pw.add("(min-width: 1200px)", ()=>{
        document.querySelectorAll('.design-choose-item-wrap').forEach((item)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(item.querySelector('.design-choose-item-1'), {
                x: -400,
                rotate: -40
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(item.querySelector('.design-choose-item-2'), {
                x: 400,
                rotate: 40
            });
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
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
    const aw = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    aw.add("(min-width: 991px)", ()=>{
        const awardItems = document.querySelectorAll('.design-award-item');
        awardItems.forEach(function(div) {
            div.addEventListener('mouseenter', function() {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(div, {
                    width: '100%',
                    duration: 2,
                    ease: 'expo.out'
                });
            });
            div.addEventListener('mouseleave', function() {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(div, {
                    width: '70%',
                    duration: 2,
                    ease: 'expo.out'
                });
            });
        });
    });
};
const studioProjectAnimation = ()=>{
    const perspective_1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    perspective_1.add("(min-width: 767px)", ()=>{
        const wrap = document.querySelector(".studio-project-wrap");
        if (wrap) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(".studio-project-thumb", {
                perspective: 60
            });
            const images = document.querySelectorAll(".studio-project-thumb img");
            images.forEach((img)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(img, {
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
        const split = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"](element, {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(split.chars, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%'
                },
                ...animationProps
            });
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(split.chars, animationProps);
        }
    });
}
function animationParagraph() {
    const paragraphs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray('.tp_text_anim p');
    paragraphs.forEach((paragraph)=>{
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            scrollTrigger: {
                trigger: paragraph,
                start: 'top 90%',
                end: 'bottom 60%',
                scrub: false,
                markers: false,
                toggleActions: 'play none none none'
            }
        });
        const splitText = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"](paragraph, {
            type: "lines"
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(paragraph, {
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
    const tm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    tm.add("(min-width: 991px)", ()=>{
        const tl_team = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
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
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".tp-text-perspective").forEach((splitTextLine)=>{
        const delayAttr = splitTextLine.getAttribute('data-delay');
        const delay_value = delayAttr ? parseFloat(delayAttr) : 0.5;
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: 'top 85%',
                scrub: false,
                markers: false,
                toggleActions: 'play none none none'
            }
        });
        const itemSplitted = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"](splitTextLine, {
            type: "lines"
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(splitTextLine, {
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
    const mm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    mm.add("(min-width: 1199px)", ()=>{
        const panels = document.querySelectorAll('.stack-panel-pin');
        if (!panels.length) return;
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
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
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(".tp-gsap-bg", {
        scaleX: 1
    });
    const mm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    mm.add("(min-width:1400px)", ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".tp-gsap-bg", {
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
        const split = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"](el, {
            type: "lines,words,chars",
            linesClass: "tp-split-line"
        });
        splits.push(split);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(el, {
            perspective: 400
        });
        const animationProps = {
            opacity: 0
        };
        if (el.classList.contains('tp-split-right')) animationProps.x = "50";
        if (el.classList.contains('tp-split-left')) animationProps.x = "-50";
        if (el.classList.contains('tp-split-up')) animationProps.y = "80";
        if (el.classList.contains('tp-split-down')) animationProps.y = "-80";
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(split.chars, animationProps);
        // Create animation
        const anim = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(split.chars, {
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
        const zoomInTimeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
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
    const pm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    pm.add("(min-width: 1200px)", ()=>{
        const portfolioArea = document.querySelector('.st-portfolio-area');
        if (!portfolioArea) return;
        const projectText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
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
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".st-cta-bg-circle", {
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
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach((trigger)=>trigger.kill());
    };
};
function imageRevealAnimation() {
    const tp_img_reveal = document.querySelectorAll(".tp_img_reveal");
    if (!tp_img_reveal.length) return ()=>{};
    const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
        tp_img_reveal.forEach((img_reveal)=>{
            const image = img_reveal.querySelector("img");
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
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
    const project_text = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
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
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach((trigger)=>trigger.kill());
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
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
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
    const shop_thumb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    const wrap = document.querySelector('.tp-shop-product-area');
    shop_thumb.add("(min-width: 1200px)", ()=>{
        if (wrap) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
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
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach((trigger)=>trigger.kill());
    };
}
function heroBgAnimation() {
    const t2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
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
    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
    const p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
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
_c = PPAboutAnimation;
function innerServiceAnimation() {
    const sr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    sr.add("(min-width: 992px)", ()=>{
        const tl_ser = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
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
    const cr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    cr.add("(min-width: 1200px)", ()=>{
        const tl_ser = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
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
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(".tp-bounce", {
        y: -80,
        opacity: 0
    });
    const mybtn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".tp-bounce");
    mybtn.forEach((btn)=>{
        const tp_delay_value = btn.getAttribute("data-delay") || 1;
        const triggerElement = btn.closest(".tp-bounce-trigger");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btn, {
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
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set('.tp-portfolio-slicer-wrap .pro-img-1 img', {
            x: 500
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set('.tp-portfolio-slicer-wrap .pro-img-2 img', {
            x: -500
        });
        const portfolioWraps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray('.tp-portfolio-slicer-wrap');
        portfolioWraps.forEach((wrap)=>{
            // Animate first image
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(wrap.querySelector('.pro-img-1 img'), {
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(wrap.querySelector('.pro-img-2 img'), {
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
_c1 = PortfolioSlicerAnimation;
const portfolioShowcaseAnimation = ()=>{
    const pr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
    pr.add("(min-width: 767px)", ()=>{
        const otherSections = document.querySelectorAll('.showcase-portfolio-panel');
        otherSections.forEach((section)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(otherSections, {
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
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(".tp-gsap-bg", {
        scaleX: 1
    });
    const mm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    mm.add("(min-width:1400px)", ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".tp-gsap-bg", {
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
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray('.moving-text').forEach((section, index)=>{
        const w = section.querySelector('.wrapper-text');
        if (!w) return;
        const [x, xEnd] = index % 2 ? [
            section.offsetWidth - w.scrollWidth,
            0
        ] : [
            0,
            section.offsetWidth - w.scrollWidth
        ];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(w, {
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
    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
    otherSections.forEach((section)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(otherSections, {
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
    const pw = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    pw.add("(min-width: 991px)", ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set('.design-project-thumb.item-1', {
            x: 400,
            rotate: 10
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set('.design-project-thumb.item-2', {
            x: -400,
            rotate: -10
        });
        document.querySelectorAll('.design-project-item').forEach((item)=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
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
    const pi = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    pi.add("(min-width: 1200px)", ()=>{
        document.querySelectorAll('.tp-pd-3-portfolio-item-wrap').forEach((group)=>{
            const panels = group.querySelectorAll('.tp-pd-3-portfolio-item');
            const pinTarget = group.querySelector('.tp-pd-3-content-pin');
            panels.forEach((section)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
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
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia().add("(min-width: 991px)", ()=>{
        document.querySelectorAll(".img-box").forEach((box)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(box.querySelectorAll('.tp-top-bottom-scroll'), {
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
    const mm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
    mm.add("(min-width: 1200px)", ()=>{
        if (document.querySelector(".project-details-2-area")) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
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
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set('.tp-perspective-slider .tp-perspective-main .tp-perspective-inner', {
        perspective: 60
    });
    document.querySelectorAll('.tp-perspective-slider .tp-perspective-main .tp-perspective-inner .tp-perspective-image').forEach((slide)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(slide, {
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
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(".tp-brand-inner-item img", {
        scale: 1.3,
        opacity: 0
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".tp-brand-inner-item img", {
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
var _c, _c1;
__turbopack_context__.k.register(_c, "PPAboutAnimation");
__turbopack_context__.k.register(_c1, "PortfolioSlicerAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/ParallaxSlider.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const images = Array.from(document.querySelectorAll('.parallax-img'));
    const slider = document.querySelector('.parallax-sliders');
    const sliderWrapper = document.querySelector('.parallax-slider-wrapper');
    // If elements don't exist, return early
    if (!slider || !sliderWrapper || images.length === 0) return;
    let sliderWidth;
    let imageWidth;
    let current = 0;
    let target = 0;
    const ease = 0.05;
    window.addEventListener('resize', init);
    images.forEach((img, idx)=>{
        img.style.backgroundImage = `url(/assets/img/project-slider-img/portfolio-slider-5/port-${idx + 1}.jpg)`;
    });
    // Add wheel event listener only if sliderWrapper exists
    sliderWrapper.addEventListener('wheel', (e)=>{
        e.preventDefault();
        target += e.deltaY * 0.5;
        // Limit target to valid range (need to wait for init to set sliderWidth)
        if (sliderWidth) {
            target = Math.max(0, target);
            target = Math.min(sliderWidth - window.innerWidth, target);
        }
    });
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
    // Initialize after a small delay to ensure DOM is ready
    setTimeout(()=>{
        init();
        animate();
    }, 100);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/titleAnimation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bounceAnimation",
    ()=>bounceAnimation,
    "textBounceAnimation",
    ()=>textBounceAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/SplitText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jquery/dist/jquery.js [app-client] (ecmascript)");
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"]);
// bounce animation
function bounceAnimation() {
    const bounceElements = document.querySelectorAll(".tp-btn-bounce");
    if (bounceElements.length > 0) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(".tp-btn-bounce", {
            y: -100,
            opacity: 0
        });
        const buttons = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.toArray(".tp-btn-bounce");
        buttons.forEach((btn)=>{
            const $btn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(btn);
            const triggerElement = $btn.closest(".tp-btn-trigger").get(0);
            const delayValue = parseFloat(btn.dataset.delay || "1");
            if (!triggerElement) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(btn, {
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
    const triggerElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('.tp-text-bounce-trigger');
    if (triggerElements.length > 0) {
        // Set initial state
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(".tp-text-bounce", {
            y: 100,
            opacity: 0
        });
        // Get all bounce elements with proper typing
        const bounceElements = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.toArray(".tp-text-bounce");
        bounceElements.forEach((btn)=>{
            const $btn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jquery$2f$dist$2f$jquery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(btn);
            const triggerElement = $btn.closest('.tp-text-bounce-trigger').get(0);
            const delayValue = parseFloat($btn.attr("data-delay") || "0.15");
            // Safety check for trigger element
            if (!triggerElement) return;
            // Create the animation
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(btn, {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/animationConfig.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animationConfig",
    ()=>animationConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useGsapAnimation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$ParallaxSlider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/ParallaxSlider.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$titleAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/titleAnimation.ts [app-client] (ecmascript)");
;
;
;
const animationConfig = {
    //home page animation
    "/": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["funfactPanelAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonBounceAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicePanelAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$titleAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textBounceAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animationParagraph"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$titleAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bounceAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textInvertAnim1"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["videoAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["panelAnimation"]
    ],
    //design studio page
    "/design-studio": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollMovingText"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolioAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textInvertAnim3"]
    ],
    //digital marketing page
    "/digital-marketing": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zoomInAnimation"]
    ],
    //design agency page
    "/design agency": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textRightScrollAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designChooseAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designProjectAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designAwardAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revalEffectAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["videoAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textInvertAnim2"]
    ],
    //creative agency page
    "/creative-agency": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textPerspectiveAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studioProjectAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textRevealAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animationParagraph"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollMovingText"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["teamAnimation"]
    ],
    //unique-ai-image page
    "/unique-ai-image": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animationParagraph"]
    ],
    //corporate agency page
    "/corporate-agency": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zoomInAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollMovingText"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["panelAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eyeAnimation"]
    ],
    //mobile application page
    "/mobile-application": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["panelPinAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gsapBackgroundAnim"]
    ],
    //IT solution page
    "/it-solution": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animationParagraph"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitTextAnimation"]
    ],
    //crypto currency page
    "/cryptocurrency": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animationParagraph"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textRevealAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zoomInAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroBgAnimation"]
    ],
    //startup agency page
    "/startup-agency": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animationParagraph"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textRevealAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolioTitleAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ctaAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonBounceAnimation"]
    ],
    //fashion studio page
    "/fashion-studio": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageRevealAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolioProjectAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zoomInAnimation"]
    ],
    //personal portfolio page
    "/personal-portfolio": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animationParagraph"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textRevealAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupTextHoverEffect"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitTextAnimation"]
    ],
    //personal portfolio page
    "/shop-modern": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productBannerAnimation"]
    ],
    //portfolio webgl showcase page
    "/portfolio-webgl-showcase": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$ParallaxSlider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parallaxSlider"]
    ],
    //portfolio perspective slider page
    "/portfolio-perspective-slider-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revalEffectAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["perspectiveAnim"]
    ],
    //portfolio horizontal showcase page
    "/portfolio-horizontal-showcase-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$ParallaxSlider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parallaxSlider"]
    ],
    //portfolio slicer page
    "/portfolio-slicer-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PortfolioSlicerAnimation"]
    ],
    //portfolio showcase page
    "/portfolio-showcase-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolioShowcaseAnimation"]
    ],
    //portfolio showcase page
    "/brand-showcase-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brandImgAnim"]
    ],
    //about me page
    "/about-me-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupTextHoverEffect"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animationParagraph"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PPAboutAnimation"]
    ],
    //about me page
    "/about-us-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["funfactPanelAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$titleAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textBounceAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["panelAnimation"]
    ],
    //about modern page
    "/about-modern-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollMovingText"]
    ],
    //about creative page
    "/about-creative-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textRevealAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animationParagraph"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollMovingText"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zoomInAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["teamAnimation"]
    ],
    //about startup page
    "/about-startup-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["panelAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eyeAnimation"]
    ],
    //service-1 page
    "/service-1-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textPerspectiveAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["innerServiceAnimation"]
    ],
    //service-2 page
    "/service-2-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicePanelAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["innerServiceAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["panelAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["videoAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textInvertAnim1"]
    ],
    //service-3 page
    "/service-3-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollMovingText"]
    ],
    //service-4 page
    "/service-4-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageRevealAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollMovingText"]
    ],
    //service-details page
    "/service-details-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageRevealAnimation"]
    ],
    //service-details-2 page
    "/service-details-2-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageRevealAnimation"]
    ],
    //career-details page
    "/career-details-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["careerAnimation"]
    ],
    //team page
    "/team-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonBounceAnimation"]
    ],
    //portfolio metro page
    "/portfolio-metro-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textRightScrollAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["designProjectAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revalEffectAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollMovingText"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textInvertAnim2"]
    ],
    //portfolio metro page
    "/portfolio-pinterest-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textPerspectiveAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studioProjectAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textRevealAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["videoAnimation"]
    ],
    //portfolio details creative slider page
    "/portfolio-details-creative-slider-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolioItemPinAnimation"]
    ],
    //portfolio details creative slider page
    "/portfolio-details-modern-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textRightScrollAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textInvertAnim2"]
    ],
    //portfolio details video page
    "/portfolio-details-video-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectDetailsAnim"]
    ],
    //shop with slider page
    "/shop-with-slider-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productBannerAnimation"]
    ],
    //contact me page
    "/contact-me-light": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupTextHoverEffect"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animationParagraph"]
    ],
    //contact me page
    "/contact": [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactBgAnimation"]
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/Animation/AnimationWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$animationConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/animationConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useGsapAnimation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const AnimationWrapper = ({ children })=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "AnimationWrapper.useGSAP": ()=>{
            const timer = setTimeout({
                "AnimationWrapper.useGSAP.timer": ()=>{
                    // Global animations (always run)
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeAnimation"])();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGsapAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charAnimation"])();
                    // Page-specific animations
                    if (pathname) {
                        const pageAnimations = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$animationConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animationConfig"][pathname];
                        if (pageAnimations && Array.isArray(pageAnimations)) {
                            pageAnimations.forEach({
                                "AnimationWrapper.useGSAP.timer": (fn)=>fn()
                            }["AnimationWrapper.useGSAP.timer"]);
                        }
                    }
                }
            }["AnimationWrapper.useGSAP.timer"], 100);
            return ({
                "AnimationWrapper.useGSAP": ()=>clearTimeout(timer)
            })["AnimationWrapper.useGSAP"];
        }
    }["AnimationWrapper.useGSAP"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
};
_s(AnimationWrapper, "UoAAi3Pvkd/EHoOC/qEiOe2TbF4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = AnimationWrapper;
const __TURBOPACK__default__export__ = AnimationWrapper;
var _c;
__turbopack_context__.k.register(_c, "AnimationWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useScrollSmooth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollSmoother$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollSmoother.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function useScrollSmooth() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "useScrollSmooth.useGSAP": ()=>{
            // Register plugins
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollSmoother$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollSmoother"]);
            const smoothWrapper = document.getElementById("smooth-wrapper");
            const smoothContent = document.getElementById("smooth-content");
            if (!smoothWrapper || !smoothContent) return;
            const isDesktop = window.innerWidth >= 768;
            if (isDesktop) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollSmoother$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollSmoother"].create({
                    wrapper: smoothWrapper,
                    content: smoothContent,
                    smooth: 2,
                    effects: true,
                    smoothTouch: 0.3,
                    normalizeScroll: true,
                    ignoreMobileResize: false
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].config({
                    nullTargetWarn: false
                });
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: ".shape",
                pin: true,
                start: "center center",
                end: "+=300",
                markers: false
            });
            const handleResize = {
                "useScrollSmooth.useGSAP.handleResize": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                }
            }["useScrollSmooth.useGSAP.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "useScrollSmooth.useGSAP": ()=>{
                    window.removeEventListener("resize", handleResize);
                }
            })["useScrollSmooth.useGSAP"];
        }
    }["useScrollSmooth.useGSAP"], []);
}
_s(useScrollSmooth, "VFzjMmoc5axVjyj8E2Q2cQd9phs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/provider/ScrollSmoothProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollSmoothProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollSmooth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useScrollSmooth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ScrollSmoothProvider({ children }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollSmooth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(ScrollSmoothProvider, "RZ7RbC708l93gFoVc6Ix35OI2mY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollSmooth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = ScrollSmoothProvider;
var _c;
__turbopack_context__.k.register(_c, "ScrollSmoothProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/svg/ArrowIcons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ArrowSvg = ({ width = "10", height = "10", strokeWidth = "1.5", viewBox = "0 0 10 10", pathValue = "M1 9L9 1M9 1H1M9 1V9" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: width,
            height: height,
            viewBox: viewBox,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c = ArrowSvg;
const ArrowTwo = ({ width = "102", height = "9", viewBox = "0 0 102 9", pathValue = "M98 8L101.5 4.5L98 1M1 4H101V5H1V4Z" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: width,
            height: height,
            viewBox: viewBox,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c1 = ArrowTwo;
const ArrowThree = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "6",
            height: "10",
            viewBox: "0 0 6 10",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c2 = ArrowThree;
const ArrowFour = ({ width = "12", height = "12", viewBox = "0 0 12 12", pathValue = "M1 11L11 1M11 1H1M11 1V11" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: width,
            height: height,
            viewBox: viewBox,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c3 = ArrowFour;
const ArrowFive = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c4 = ArrowFive;
const BottomArrow = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c5 = BottomArrow;
const ArrowSix = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c6 = ArrowSix;
const ArrowSeven = ({ color = "#E9FF48" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "81",
            height: "81",
            viewBox: "0 0 81 81",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c7 = ArrowSeven;
const ArrowEight = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "18",
            height: "20",
            viewBox: "0 0 18 20",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2.45844 0H1.04844C0.118443 0 -0.351558 1.13 0.308442 1.79L6.03844 7.52C7.67844 9.16 10.3284 9.16 11.9684 7.52L17.6984 1.79C18.3484 1.13 17.8784 0 16.9484 0H15.5384C14.7084 0 13.9084 0.33 13.3184 0.92L9.73844 4.5C9.32844 4.91 8.66844 4.91 8.25844 4.5L4.67844 0.92C4.08844 0.33 3.28844 0 2.45844 0Z",
                    fill: "#292D32"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 92,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c8 = ArrowEight;
const ArrowNine = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c9 = ArrowNine;
const ArrowTen = ({ strokeColor = "#21212D" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "10",
            height: "10",
            viewBox: "0 0 10 10",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c10 = ArrowTen;
const ArrowEleven = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "15",
            height: "12",
            viewBox: "0 0 15 12",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c11 = ArrowEleven;
const ArrowTwelve = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "351",
            height: "8",
            viewBox: "0 0 351 8",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c12 = ArrowTwelve;
const ArrowThirteen = ({ width = "14", height = "14", viewBox = "0 0 14 14", pathValue = "M1 7H13", pathValueTwo = "M7 1L13 7L7 13" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: width,
            height: height,
            viewBox: viewBox,
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c13 = ArrowThirteen;
const ArrowFourteen = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "22",
            height: "22",
            viewBox: "0 0 22 22",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c14 = ArrowFourteen;
const ArrowFifteen = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c15 = ArrowFifteen;
const ArrowSixteen = ({ width = "73", height = "72", strokeColor = "#453030" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: width,
            height: height,
            viewBox: "0 0 73 72",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c16 = ArrowSixteen;
const ArrowSeventeen = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "205",
            height: "209",
            viewBox: "0 0 205 209",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17.9992 110.499C79.4994 235.001 90.4995 23.4983 192.778 88.2089",
                    stroke: "#CFC292",
                    strokeWidth: "1.5"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 176,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M191.52 76.8785C188.858 81.4883 190.33 87.3118 194.811 89.8989",
                    stroke: "#CFC292",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 177,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c17 = ArrowSeventeen;
const ArrowEightteen = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "10",
            height: "21",
            viewBox: "0 0 10 21",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c18 = ArrowEightteen;
const ArrowNineteen = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "25",
            height: "24",
            viewBox: "0 0 25 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5.23804 17.2178L18.2428 8.11173",
                    stroke: "#141414",
                    strokeWidth: "2",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 197,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8.62744 5.00098C11.1637 8.6231 16.1444 9.50353 19.7634 6.96947",
                    stroke: "#141414",
                    strokeWidth: "2",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 198,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c19 = ArrowNineteen;
const ArrowTwenty = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "81",
            height: "9",
            viewBox: "0 0 81 9",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    y: "4",
                    width: "80",
                    height: "1",
                    fill: "#111013"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 208,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c20 = ArrowTwenty;
const ArrowNextPrevIcon = ({ direction = 'right', strokeColor = 'white' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c21 = ArrowNextPrevIcon;
const ArrowTwentyOne = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c22 = ArrowTwentyOne;
const ArrowTwentyTwo = ({ direction = "right" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "101",
            height: "9",
            viewBox: "0 0 101 9",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    width: "100",
                    height: "1",
                    transform: "matrix(-1 0 0 1 101 4.01807)",
                    fill: "#111013"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 240,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c23 = ArrowTwentyTwo;
const ArrowTwentyThree = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "82",
            height: "9",
            viewBox: "0 0 82 9",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c24 = ArrowTwentyThree;
const ArrowTwentyFour = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "13",
            height: "13",
            viewBox: "0 0 13 13",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c25 = ArrowTwentyFour;
const ArrowTwentyFive = ({ width = "732" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: width,
            height: "9",
            viewBox: "0 0 732 9",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c26 = ArrowTwentyFive;
const ArrowTwentySix = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "102",
            height: "9",
            viewBox: "0 0 102 9",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c27 = ArrowTwentySix;
const ArrowTwentySeven = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "15",
            height: "21",
            viewBox: "0 0 15 21",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "6.25781",
                    width: "1.5",
                    height: "21",
                    fill: "#000"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 286,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14.1641 13.6257C10.28 13.6257 7.13714 16.9239 7.13714 21",
                    stroke: "#000",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10"
                }, void 0, false, {
                    fileName: "[project]/src/svg/ArrowIcons.tsx",
                    lineNumber: 287,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c28 = ArrowTwentySeven;
const ArrowTwentyEight = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "20",
            viewBox: "0 0 18 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c29 = ArrowTwentyEight;
const ArrowTwentyNine = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "13",
            height: "14",
            viewBox: "0 0 13 14",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c30 = ArrowTwentyNine;
const ArrowHeroIcon = ({ direction = "right" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "22",
            viewBox: "0 0 12 22",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c31 = ArrowHeroIcon;
const DownArrow = ({ width = "18", height = "18", path = "M1 1L17 17", pathTwo = "M17 1V17H1" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: width,
            height: height,
            viewBox: "0 0 18 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c32 = DownArrow;
const DownArrowTwo = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c33 = DownArrowTwo;
const BacktoTopArrowFooter = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "20",
            viewBox: "0 0 16 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c34 = BacktoTopArrowFooter;
const BacktoTopArrow = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "12",
            height: "7",
            viewBox: "0 0 12 7",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c35 = BacktoTopArrow;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35;
__turbopack_context__.k.register(_c, "ArrowSvg");
__turbopack_context__.k.register(_c1, "ArrowTwo");
__turbopack_context__.k.register(_c2, "ArrowThree");
__turbopack_context__.k.register(_c3, "ArrowFour");
__turbopack_context__.k.register(_c4, "ArrowFive");
__turbopack_context__.k.register(_c5, "BottomArrow");
__turbopack_context__.k.register(_c6, "ArrowSix");
__turbopack_context__.k.register(_c7, "ArrowSeven");
__turbopack_context__.k.register(_c8, "ArrowEight");
__turbopack_context__.k.register(_c9, "ArrowNine");
__turbopack_context__.k.register(_c10, "ArrowTen");
__turbopack_context__.k.register(_c11, "ArrowEleven");
__turbopack_context__.k.register(_c12, "ArrowTwelve");
__turbopack_context__.k.register(_c13, "ArrowThirteen");
__turbopack_context__.k.register(_c14, "ArrowFourteen");
__turbopack_context__.k.register(_c15, "ArrowFifteen");
__turbopack_context__.k.register(_c16, "ArrowSixteen");
__turbopack_context__.k.register(_c17, "ArrowSeventeen");
__turbopack_context__.k.register(_c18, "ArrowEightteen");
__turbopack_context__.k.register(_c19, "ArrowNineteen");
__turbopack_context__.k.register(_c20, "ArrowTwenty");
__turbopack_context__.k.register(_c21, "ArrowNextPrevIcon");
__turbopack_context__.k.register(_c22, "ArrowTwentyOne");
__turbopack_context__.k.register(_c23, "ArrowTwentyTwo");
__turbopack_context__.k.register(_c24, "ArrowTwentyThree");
__turbopack_context__.k.register(_c25, "ArrowTwentyFour");
__turbopack_context__.k.register(_c26, "ArrowTwentyFive");
__turbopack_context__.k.register(_c27, "ArrowTwentySix");
__turbopack_context__.k.register(_c28, "ArrowTwentySeven");
__turbopack_context__.k.register(_c29, "ArrowTwentyEight");
__turbopack_context__.k.register(_c30, "ArrowTwentyNine");
__turbopack_context__.k.register(_c31, "ArrowHeroIcon");
__turbopack_context__.k.register(_c32, "DownArrow");
__turbopack_context__.k.register(_c33, "DownArrowTwo");
__turbopack_context__.k.register(_c34, "BacktoTopArrowFooter");
__turbopack_context__.k.register(_c35, "BacktoTopArrow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/contacts/ContactFormArea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$ArrowIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/ArrowIcons.tsx [app-client] (ecmascript)");
"use client";
;
;
const ContactFormArea = ()=>{
    const handleSubmit = (e)=>{
        e.preventDefault();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tp-contact-form-ptb pb-140",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container container-1230",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tp-contact-form-heading tp_fade_anim mb-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ar-about-us-4-title-box d-flex align-items-center mb-15",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tp-section-subtitle pre",
                                            children: "Contact Us"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                            lineNumber: 16,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ar-about-us-4-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$ArrowIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowTwenty"], {}, void 0, false, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "tp-section-title lts",
                                    children: [
                                        `Let's`,
                                        " make ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                            lineNumber: 21,
                                            columnNumber: 81
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "your brand ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tp-contact-form-wrap",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                id: "contact-form",
                                onSubmit: handleSubmit,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-lg-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tp-contact-form-input mb-20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: "Full name*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                        lineNumber: 32,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-lg-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tp-contact-form-input mb-20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: "Email address*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-lg-12",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tp-contact-form-input mb-20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: "Website link"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                        lineNumber: 44,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-lg-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "tp-contact-form-input mb-20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            children: "How Can We Help You*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                            lineNumber: 50,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "tp-contact-form-btn",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "w-100",
                                                            type: "submit",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-1",
                                                                        children: "Send Message"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/contacts/ContactFormArea.tsx",
                                                                        lineNumber: 57,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_c = ContactFormArea;
const __TURBOPACK__default__export__ = ContactFormArea;
var _c;
__turbopack_context__.k.register(_c, "ContactFormArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/BackToTop/BackToTop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$ArrowIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/svg/ArrowIcons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function BackToTop() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BackToTop.useEffect": ()=>{
            const handleScroll = {
                "BackToTop.useEffect.handleScroll": ()=>{
                    // Show button after scrolling down 200px
                    if (window.scrollY > 200) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                }
            }["BackToTop.useEffect.handleScroll"];
            // Add scroll event listener
            window.addEventListener("scroll", handleScroll);
            // Cleanup function
            return ({
                "BackToTop.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                }
            })["BackToTop.useEffect"];
        }
    }["BackToTop.useEffect"], []);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `back-to-top-wrapper ${isVisible ? 'back-to-top-btn-show' : ''}`,
        onClick: scrollToTop,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            id: "back_to_top",
            type: "button",
            className: "back-to-top-btn",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$svg$2f$ArrowIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BacktoTopArrow"], {}, void 0, false, {
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
_s(BackToTop, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = BackToTop;
var _c;
__turbopack_context__.k.register(_c, "BackToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_54cbba6a._.js.map