(window.webpackJsonp = window.webpackJsonp || []).push([
  [29],
  {
    1285: function (t, e, l) {
      "use strict";
      l.r(e);
      l(86), l(62), l(116), l(75), l(117);
      var r = l(55),
        c = (l(76), l(40), l(30));
      function o(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(object);
          t &&
            (l = l.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, l);
        }
        return e;
      }
      function n(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? o(Object(source), !0).forEach(function (e) {
                Object(r.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : o(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var d = {
          data: function () {
            return {};
          },
          computed: n(
            n(
              n({}, Object(c.d)("web3Modal", ["account"])),
              Object(c.d)("memberProfile", ["memberStores"])
            ),
            {},
            {
              isMemberOfTotemStore: function () {
                return (
                  this.memberStores.filter(function (t) {
                    return 2 == t.CollectionId;
                  }).length > 0
                );
              },
            }
          ),
          methods: {},
        },
        m = l(65),
        component = Object(m.a)(
          d,
          function () {
            var t = this,
              e = t.$createElement,
              l = t._self._c || e;
            return l("main", { staticClass: "main" }, [
              t._m(0),
              t._v(" "),
              l(
                "section",
                {
                  staticClass:
                    "create-collectible section-padding-60 position-relative wow fadeIn animated",
                },
                [
                  l("div", { staticClass: "container" }, [
                    l("div", { staticClass: "row text-center" }, [
                      l(
                        "div",
                        { staticClass: "col-lg-8 offset-lg-2 col-12" },
                        [
                          l(
                            "h2",
                            {
                              staticClass: " mb-20",
                              staticStyle: { color: "#e7e7e7" },
                            },
                            [t._v("Create Collectible")]
                          ),
                          t._v(" "),
                          l("big", { staticStyle: { color: "#e7e7e7" } }, [
                            t._v(
                              "Choose “single” if you want your collectible to be one of a kind or “Multiple” if you want to sell one collectible multiple times."
                            ),
                          ]),
                        ],
                        1
                      ),
                    ]),
                    t._v(" "),
                    l("div", { staticClass: "row mt-30" }, [
                      l(
                        "div",
                        { staticClass: "col-lg-3 offset-lg-3 col-sm-6 mt-30" },
                        [
                          l("nuxt-link", { attrs: { to: "/create/single" } }, [
                            l("div", { staticClass: "collectible-box" }, [
                              l("img", {
                                staticClass: "mb-40",
                                attrs: {
                                  src: "assets/img/create-single.png",
                                  width: "260",
                                  alt: "single",
                                },
                              }),
                              t._v(" "),
                              l("h4", [t._v("Single")]),
                              t._v(" "),
                              l("span", { staticClass: "text-gray" }, [
                                t._v("BEP-721"),
                              ]),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      t._v(" "),
                      l(
                        "div",
                        { staticClass: "col-lg-3 col-sm-6 mt-30" },
                        [
                          l(
                            "nuxt-link",
                            { attrs: { to: "/create/multiple" } },
                            [
                              l("div", { staticClass: "collectible-box" }, [
                                l("img", {
                                  staticClass: "mb-40",
                                  attrs: {
                                    src: "assets/img/create-multiple.png",
                                    width: "260",
                                    alt: "multiple",
                                  },
                                }),
                                t._v(" "),
                                l("h4", [t._v("Multiple")]),
                                t._v(" "),
                                l("span", { staticClass: "text-gray" }, [
                                  t._v("BEP-1155"),
                                ]),
                              ]),
                            ]
                          ),
                        ],
                        1
                      ),
                    ]),
                    t._v(" "),
                    l("div", { staticClass: "row mt-30" }, [
                      t.isMemberOfTotemStore
                        ? l(
                            "div",
                            {
                              staticClass:
                                "col-lg-3 offset-lg-3 col-sm-6 mt-30",
                            },
                            [
                              l(
                                "nuxt-link",
                                { attrs: { to: "/create/totem" } },
                                [
                                  l("div", { staticClass: "collectible-box" }, [
                                    l("img", {
                                      staticClass: "mb-40",
                                      attrs: {
                                        src: "assets/img/create-multiple.png",
                                        width: "260",
                                        alt: "multiple",
                                      },
                                    }),
                                    t._v(" "),
                                    l("h4", [t._v("TOTEM")]),
                                    t._v(" "),
                                    l("span", { staticClass: "text-gray" }, [
                                      t._v("BEP-1155"),
                                    ]),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          )
                        : t._e(),
                    ]),
                    t._v(" "),
                    t._m(1),
                  ]),
                ]
              ),
            ]);
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                l = t._self._c || e;
              return l(
                "section",
                { staticClass: "home-slider position-relative" },
                [
                  l(
                    "div",
                    {
                      staticClass:
                        "hero-slider-1 dot-style-1 dot-style-1-position-1",
                      staticStyle: {
                        "background-image":
                          "url(assets/img/crafting_04_layer1.png)",
                      },
                    },
                    [
                      l(
                        "div",
                        {
                          staticClass:
                            "single-hero-slider single-animation-wrap",
                        },
                        [
                          l("div", { staticClass: "container" }, [
                            l(
                              "div",
                              {
                                staticClass:
                                  "row align-items-center slider-animated-1",
                              },
                              [
                                l("div", { staticClass: "col-lg-5 col-md-6" }, [
                                  l(
                                    "div",
                                    {
                                      staticClass: "hero-slider-content-2",
                                      staticStyle: { color: "#e7e7e7" },
                                    },
                                    [
                                      l(
                                        "h2",
                                        { staticClass: "animated fw-900" },
                                        [t._v("Create Collectible")]
                                      ),
                                      t._v(" "),
                                      l("p", { staticClass: "animated" }, [
                                        t._v(
                                          "Create your own artworks and publish on sales in our market place."
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]),
                                t._v(" "),
                                l("div", { staticClass: "col-lg-7 col-md-6" }, [
                                  l(
                                    "div",
                                    {
                                      staticClass:
                                        "single-slider-img single-slider-img-1 bannerCreateNFT",
                                    },
                                    [
                                      l("img", {
                                        staticClass: "animated slider-1-1",
                                        attrs: {
                                          src: "assets/img/crafting_04_layer2.png",
                                          alt: "",
                                        },
                                      }),
                                    ]
                                  ),
                                ]),
                              ]
                            ),
                          ]),
                        ]
                      ),
                    ]
                  ),
                  t._v(" "),
                  l("div", { staticClass: "slider-arrow hero-slider-1-arrow" }),
                ]
              );
            },
            function () {
              var t = this,
                e = t.$createElement,
                l = t._self._c || e;
              return l("div", { staticClass: "row text-center mt-60" }, [
                l("div", { staticClass: "col-lg-8 offset-lg-2 col-12" }, [
                  l("strong", { staticStyle: { color: "#b32a2a" } }, [
                    t._v(
                      "We do not own your private keys and cannot access your funds without your confirmation."
                    ),
                  ]),
                ]),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
  },
]);
