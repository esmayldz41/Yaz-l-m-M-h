
let a = document.getElementById("tsparticles");
window.addEventListener("keypress", function (e) {
    if (e.key === "g") {
        a.style.display = "none";
    }

});
window.addEventListener("keypress", function (e) {
    if (e.key === "k") {
        a.style.display = "block";
    }

});
window.addEventListener("dblclick", function () {
    a.style.display = "none";
});
window.addEventListener("click", function () {
    a.style.display = "block";
});


(async () => {
    await tsParticles.load({
        id: "tsparticles",
        options: {
            background: {
                color: "#000"
            },
            particles: {
                shape: {
                    type: "emoji",
                    options: {
                        emoji: {
                            value: "💵"
                        }
                    }
                },
                life: {
                    duration: {
                        value: 0
                    }
                },
                number: {
                    value: 200,
                    max: 0,
                    density: {
                        enable: true
                    }
                },
                move: {
                    gravity: {
                        enable: false
                    },
                    decay: 0,
                    direction: "bottom",
                    speed: 2,
                    outModes: "out"
                },
                size: {
                    value: 22
                },
                opacity: {
                    value: 1,
                    animation: {
                        enable: false
                    }
                },
                rotate: {
                    value: {
                        min: 0,
                        max: 360
                    },
                    direction: "random",
                    move: true,
                    animation: {
                        enable: true,
                        speed: 60
                    }
                },
                tilt: {
                    direction: "random",
                    enable: true,
                    move: true,
                    value: {
                        min: 0,
                        max: 360
                    },
                    animation: {
                        enable: true,
                        speed: 60
                    }
                },
                roll: {
                    darken: {
                        enable: true,
                        value: 30
                    },
                    enlighten: {
                        enable: true,
                        value: 30
                    },
                    enable: true,
                    mode: "both",
                    speed: {
                        min: 15,
                        max: 25
                    }
                },
                wobble: {
                    distance: 30,
                    enable: true,
                    move: true,
                    speed: {
                        min: -15,
                        max: 15
                    }
                }
            },
            background: {
                color: "#232323"
            },
            emitters: [],
            preset: "confetti"
        }
    });
})();