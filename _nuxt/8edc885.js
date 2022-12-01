(window.webpackJsonp = window.webpackJsonp || []).push([
  [33, 23],
  {
    1188: function (t, e, r) {
      "use strict";
      r.r(e);
      r(63), r(658);
      var o = r(11),
        n = r.n(o),
        c = r(218),
        l = {
          methods: {
            shareToFacebook: function () {
              for (
                var t = document.getElementsByClassName("btn-close"), i = 0;
                i < t.length;
                i++
              )
                t[i].click();
              return (
                window.open(
                  "https://facebook.com/sharer/sharer.php?u=" +
                    encodeURIComponent(this.$parent.selectedShareItemURL),
                  "facebook-share-dialog",
                  "width=900,height=400"
                ),
                !1
              );
            },
            shareToTwitter: function () {
              for (
                var t = document.getElementsByClassName("btn-close"), i = 0;
                i < t.length;
                i++
              )
                t[i].click();
              return (
                window.open(
                  "https://twitter.com/intent/tweet?url=" +
                    encodeURIComponent(this.$parent.selectedShareItemURL),
                  "twitter-share-dialog",
                  "width=900,height=400"
                ),
                !1
              );
            },
            shareToTelegram: function () {
              for (
                var t = document.getElementsByClassName("btn-close"), i = 0;
                i < t.length;
                i++
              )
                t[i].click();
              return (
                window.open(
                  "https://t.me/share/url?url=" +
                    encodeURIComponent(this.$parent.selectedShareItemURL),
                  "telegram-share-dialog",
                  "width=900,height=400"
                ),
                !1
              );
            },
            copyShareLink: function () {
              for (
                var t = document.getElementsByClassName("btn-close"), i = 0;
                i < t.length;
                i++
              )
                t[i].click();
              var e = this.$parent.selectedShareItemURL;
              if (/Mobi/.test(navigator.userAgent)) this.$copyText(e);
              else {
                var r = document.createElement("div");
                r.setAttribute("contentEditable", !0),
                  (r.innerHTML = e),
                  r.setAttribute(
                    "onfocus",
                    "document.execCommand('selectAll',false,null)"
                  ),
                  document.body.appendChild(r),
                  r.focus();
                var o = n()(r);
                if (navigator.userAgent.match(/ipad|iphone/i)) {
                  var l = o.get(0),
                    d = l.contentEditable,
                    v = l.readOnly;
                  (l.contentEditable = "true"), (l.readOnly = "false");
                  var m = document.createRange();
                  m.selectNodeContents(l);
                  var h = window.getSelection();
                  h.removeAllRanges(),
                    h.addRange(m),
                    l.setSelectionRange(0, 999999),
                    (l.contentEditable = d),
                    (l.readOnly = v);
                } else o.select();
                document.execCommand("copy"), document.body.removeChild(r);
              }
              Object(c.c)("Copied To Clipboard");
            },
          },
        },
        d = r(65),
        component = Object(d.a)(
          l,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "div",
              {
                staticClass: "modal fade custom-modal popup",
                attrs: {
                  id: "shareThiswModal",
                  tabindex: "-1",
                  "aria-labelledby": "shareThisModalLabel",
                  "aria-hidden": "true",
                },
              },
              [
                o("div", { staticClass: "modal-dialog" }, [
                  o("div", { staticClass: "modal-content" }, [
                    o("button", {
                      staticClass: "btn-close",
                      attrs: {
                        type: "button",
                        "data-bs-dismiss": "modal",
                        "aria-label": "Close",
                      },
                    }),
                    t._v(" "),
                    o("div", { staticClass: "modal-body" }, [
                      o("h5", { staticClass: "section-title style-1" }, [
                        t._v("Share This NFT"),
                      ]),
                      t._v(" "),
                      o("div", { staticClass: "row text-center" }, [
                        o("div", { staticClass: "col-6 col-sm-6 mt-30" }, [
                          o(
                            "a",
                            {
                              attrs: { href: "javascript:void(0)" },
                              on: { click: t.shareToTwitter },
                            },
                            [
                              o("img", {
                                attrs: {
                                  src: r(1189),
                                  width: "80",
                                  alt: "twitter",
                                },
                              }),
                              t._v(" "),
                              o("div", [t._v("Twitter")]),
                            ]
                          ),
                        ]),
                        t._v(" "),
                        o("div", { staticClass: "col-6 col-sm-6 mt-30" }, [
                          o(
                            "a",
                            {
                              attrs: { href: "javascript:void(0)" },
                              on: { click: t.shareToFacebook },
                            },
                            [
                              o("img", {
                                attrs: {
                                  src: r(1190),
                                  width: "80",
                                  alt: "facebook",
                                },
                              }),
                              t._v(" "),
                              o("div", [t._v("Facebook")]),
                            ]
                          ),
                        ]),
                        t._v(" "),
                        o("div", { staticClass: "col-6 col-sm-6 mt-30" }, [
                          o(
                            "a",
                            {
                              attrs: { href: "javascript:void(0)" },
                              on: { click: t.shareToTelegram },
                            },
                            [
                              o("img", {
                                attrs: {
                                  src: r(1191),
                                  width: "80",
                                  alt: "telegram",
                                },
                              }),
                              t._v(" "),
                              o("div", [t._v("Telegram")]),
                            ]
                          ),
                        ]),
                        t._v(" "),
                        o("div", { staticClass: "col-6 col-sm-6 mt-30" }, [
                          o(
                            "a",
                            {
                              attrs: { href: "javascript:void(0)" },
                              on: { click: t.copyShareLink },
                            },
                            [
                              o("img", {
                                attrs: {
                                  src: r(1192),
                                  width: "80",
                                  alt: "link",
                                },
                              }),
                              t._v(" "),
                              o("div", [t._v("Copy Link")]),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    1189: function (t, e, r) {
      t.exports = r.p + "img/twitter.88d497c.svg";
    },
    1190: function (t, e) {
      t.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzE5NzZEMjsiIGQ9Ik00NDgsMEg2NEMyOC43MDQsMCwwLDI4LjcwNCwwLDY0djM4NGMwLDM1LjI5NiwyOC43MDQsNjQsNjQsNjRoMzg0YzM1LjI5NiwwLDY0LTI4LjcwNCw2NC02NFY2NA0KCUM1MTIsMjguNzA0LDQ4My4yOTYsMCw0NDgsMHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGQUZBRkE7IiBkPSJNNDMyLDI1NmgtODB2LTY0YzAtMTcuNjY0LDE0LjMzNi0xNiwzMi0xNmgzMlY5NmgtNjRsMCwwYy01My4wMjQsMC05Niw0Mi45NzYtOTYsOTZ2NjRoLTY0djgwaDY0DQoJdjE3Nmg5NlYzMzZoNDhMNDMyLDI1NnoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K";
    },
    1191: function (t, e) {
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtOS40MTcgMTUuMTgxLS4zOTcgNS41ODRjLjU2OCAwIC44MTQtLjI0NCAxLjEwOS0uNTM3bDIuNjYzLTIuNTQ1IDUuNTE4IDQuMDQxYzEuMDEyLjU2NCAxLjcyNS4yNjcgMS45OTgtLjkzMWwzLjYyMi0xNi45NzIuMDAxLS4wMDFjLjMyMS0xLjQ5Ni0uNTQxLTIuMDgxLTEuNTI3LTEuNzE0bC0yMS4yOSA4LjE1MWMtMS40NTMuNTY0LTEuNDMxIDEuMzc0LS4yNDcgMS43NDFsNS40NDMgMS42OTMgMTIuNjQzLTcuOTExYy41OTUtLjM5NCAxLjEzNi0uMTc2LjY5MS4yMTh6IiBmaWxsPSIjMDM5YmU1Ii8+PC9zdmc+";
    },
    1192: function (t, e, r) {
      t.exports = r.p + "img/link.165bd9a.svg";
    },
    1197: function (t, e, r) {
      t.exports = r.p + "img/hammer_stone_2.921a9a2.png";
    },
    1249: function (t, e, r) {
      var content = r(1277);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(100).default)("3241f774", content, !0, { sourceMap: !1 });
    },
    1276: function (t, e, r) {
      "use strict";
      r(1249);
    },
    1277: function (t, e, r) {
      var o = r(99)(!1);
      o.push([
        t.i,
        ".price[data-v-78153692]{font-size:18px;font-weight:700;color:#ffb300}.usd-price[data-v-78153692]{font-size:14px;font-weight:400;color:#90908e;margin:0 0 0 7px!important}.assetName[data-v-78153692]{font-size:16px;font-weight:600}.product-img-content[data-v-78153692]{background-image:url(/assets/img/bg-seamless-obbox.png);border-radius:28px;background-color:#e6e2d6;margin-left:3%;margin-right:3%}.product-img[data-v-78153692]{background-color:#fff8ec}.inner[data-v-78153692]{background-color:transparent!important}.hashPower[data-v-78153692]{position:absolute;right:10px;top:8px;z-index:9}.product-img-action-wrap1[data-v-78153692]{background-color:#f2ebe0!important;padding:10px 12px!important}.product-img1[data-v-78153692],.product-img-action-wrap1[data-v-78153692]{position:relative!important;overflow:hidden!important}.product-img1[data-v-78153692]{border-radius:20px!important}.product-img-content1[data-v-78153692]{background-image:none!important;background-color:transparent!important}.product-content-wrap1[data-v-78153692]{background-color:#f2ebe0!important}.product-badges-mrg[data-v-78153692]{position:absolute;right:20px;top:19px;z-index:9}.product-img-action-wrap[data-v-78153692]{max-height:none!important}.product-img-content[data-v-78153692]{padding:6%!important;height:100%!important}@media only screen and (max-width:991px) and (min-width:768px){.product-img-content .is-troop div.hammer[data-v-78153692]{transform:translate(690%,-80%);font-size:.75em}.product-img-content .is-troop div.banner span[data-v-78153692]{font-size:.4em}}",
        "",
      ]),
        (t.exports = o);
    },
    1295: function (t, e, r) {
      "use strict";
      r.r(e);
      r(86), r(62), r(76), r(116), r(117);
      var o = r(4),
        n = r(55),
        c = (r(40), r(75), r(660), r(118), r(23), r(30)),
        l = r(173),
        d = r(1188),
        v = r(11),
        m = r.n(v);
      function h(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function w(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? h(Object(source), !0).forEach(function (e) {
                Object(n.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : h(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var _,
        C,
        f,
        y,
        S = {
          components: { ShareAsset: d.default },
          mixins: [l.a],
          data: function () {
            return {
              artistWalletAddress: this.$route.params.walletaddress,
              logName: "Totems.vue | ",
              selectedShareItemURL: "",
              selectedNumberofShow1: 50,
              selectedSort1: 1,
              current1: 1,
              totalPage1: 0,
              totalItem1: 0,
              selectedNumberofShow2: 50,
              selectedSort2: 6,
              current2: 1,
              totalPage2: 0,
              totalItem2: 0,
            };
          },
          watch: {},
          computed: w(
            w(
              w(
                {},
                Object(c.d)("memberProfile", [
                  "memberId",
                  "createdAssetListing",
                  "artistProfile",
                  "assetListing",
                  "likedAssetList",
                ])
              ),
              Object(c.d)("web3Modal", [
                "account",
                "account_short",
                "account_wallet",
                "chainId",
              ])
            ),
            Object(c.d)("marketplace", [
              "troopsOrderListing",
              "totemOrderListing",
            ])
          ),
          mounted:
            ((y = Object(o.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          this.init();
                        case 1:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            )),
            function () {
              return y.apply(this, arguments);
            }),
          methods: w(
            w(
              w(
                w(
                  w({}, Object(c.b)("web3Modal", ["connect", "signMessage"])),
                  Object(c.b)("asset", ["like", "unlike"])
                ),
                Object(c.b)("memberProfile", [
                  "getArtistProfile",
                  "GetMyCreatedList",
                  "GetMyAsset",
                ])
              ),
              Object(c.b)("marketplace", [
                "getTroopsOrderListing",
                "getTotemOrderListing",
              ])
            ),
            {},
            {
              openShareModal: function (t, e, r) {
                var o =
                  "https://social.stoneagenft.com/Asset/" +
                  t +
                  "/" +
                  e +
                  "/" +
                  r;
                this.selectedShareItemURL = o;
              },
              likeAsset:
                ((f = Object(o.a)(
                  regeneratorRuntime.mark(function t(e) {
                    var r,
                      o,
                      n,
                      c,
                      l = this;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (null != this.memberId) {
                                t.next = 5;
                                break;
                              }
                              return (t.next = 3), this.connect();
                            case 3:
                              t.next = 13;
                              break;
                            case 5:
                              (r = this.memberId),
                                (o = m()(".heart_" + e)),
                                (n = m()(".like_" + e)),
                                (c = parseInt(m()(n[0]).html())),
                                o.hasClass("fas")
                                  ? (this.unlike({ assetId: e, memberId: r }),
                                    o.removeClass("fas").addClass("far"),
                                    (c -= 1),
                                    this.likedAssetList.forEach(function (
                                      t,
                                      r
                                    ) {
                                      t === e && l.likedAssetList.splice(r, 1);
                                    }))
                                  : (this.like({ assetId: e, memberId: r }),
                                    o.removeClass("far").addClass("fas"),
                                    (c += 1),
                                    this.likedAssetList.push(e)),
                                n.html(c),
                                setTimeout(function () {}, 100);
                            case 13:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function (t) {
                  return f.apply(this, arguments);
                }),
              showOnChange1: function (t) {
                (this.selectedNumberofShow1 =
                  t.currentTarget.getAttribute("value")),
                  -1 == this.selectedNumberofShow1
                    ? m()("#dropdownShowLabel_1").html(" All ")
                    : m()("#dropdownShowLabel_1").html(
                        " " + this.selectedNumberofShow1 + " "
                      ),
                  m()(".dropdownShow_1").removeClass("active"),
                  m()("#" + t.currentTarget.id).addClass("active"),
                  m()("#showcover_1").removeClass("show"),
                  m()("#dropdownShow_1").removeClass("show"),
                  (this.current1 = 1),
                  this.searchTroops();
              },
              onPageChange1: function (t) {
                var e = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function r() {
                    return regeneratorRuntime.wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (!(0 < t && t <= e.totalPage1)) {
                              r.next = 4;
                              break;
                            }
                            return (
                              (e.current1 = t), (r.next = 4), e.searchTroops()
                            );
                          case 4:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  })
                )();
              },
              sortbyOnChange1: function (t) {
                (this.selectedSort1 = t.currentTarget.getAttribute("value")),
                  m()("#dropdownSortLabel_1").html(
                    " " + t.currentTarget.getAttribute("text") + " "
                  ),
                  m()(".dropdownSort_1").removeClass("active"),
                  m()("#" + t.currentTarget.id).addClass("active"),
                  m()("#sortcover_1").removeClass("show"),
                  m()("#dropdownSort_1").removeClass("show"),
                  (this.current1 = 1),
                  this.searchTroops();
              },
              searchTroops:
                ((C = Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    var e;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e = 0),
                                this.current1 > 1 &&
                                  (e =
                                    (this.current1 - 1) *
                                    this.selectedNumberofShow1),
                                (t.next = 4),
                                this.getTroopsOrderListing({
                                  categoryId: null,
                                  priceFrom: null,
                                  priceTo: null,
                                  currencyId: null,
                                  start: e,
                                  length: this.selectedNumberofShow1,
                                  sortBy: this.selectedSort1,
                                  memberId: this.memberId,
                                  searchKeyword: "",
                                })
                              );
                            case 4:
                              this.troopsOrderListing &&
                              this.troopsOrderListing.length
                                ? ((this.totalPage1 =
                                    this.troopsOrderListing[0].TotalPage),
                                  (this.totalItem1 =
                                    this.troopsOrderListing[0].TotalRow))
                                : ((this.totalPage1 = 0),
                                  (this.totalItem1 = 0));
                            case 5:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return C.apply(this, arguments);
                }),
              showOnChange2: function (t) {
                (this.selectedNumberofShow2 =
                  t.currentTarget.getAttribute("value")),
                  -1 == this.selectedNumberofShow2
                    ? m()("#dropdownShowLabel_2").html(" All ")
                    : m()("#dropdownShowLabel_2").html(
                        " " + this.selectedNumberofShow2 + " "
                      ),
                  m()(".dropdownShow_2").removeClass("active"),
                  m()("#" + t.currentTarget.id).addClass("active"),
                  m()("#showcover_2").removeClass("show"),
                  m()("#dropdownShow_2").removeClass("show"),
                  (this.current2 = 1),
                  this.searchTotem();
              },
              onPageChange2: function (t) {
                0 < t &&
                  t <= this.totalPage2 &&
                  ((this.current2 = t), this.searchTotem());
              },
              sortbyOnChange2: function (t) {
                (this.selectedSort2 = t.currentTarget.getAttribute("value")),
                  m()("#dropdownSortLabel_2").html(
                    " " + t.currentTarget.getAttribute("text") + " "
                  ),
                  m()(".dropdownSort_2").removeClass("active"),
                  m()("#" + t.currentTarget.id).addClass("active"),
                  m()("#sortcover_2").removeClass("show"),
                  m()("#dropdownSort_2").removeClass("show"),
                  (this.current2 = 1),
                  this.searchTotem();
              },
              searchTotem:
                ((_ = Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    var e;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e = 0),
                                this.current2 > 1 &&
                                  (e =
                                    (this.current2 - 1) *
                                    this.selectedNumberofShow2),
                                (t.next = 4),
                                this.getTotemOrderListing({
                                  categoryId: null,
                                  priceFrom: null,
                                  priceTo: null,
                                  currencyId: null,
                                  start: e,
                                  length: this.selectedNumberofShow2,
                                  sortBy: this.selectedSort2,
                                  memberId: this.memberId,
                                  searchKeyword: "",
                                })
                              );
                            case 4:
                              this.totemOrderListing &&
                              this.totemOrderListing.length
                                ? ((this.totalPage2 =
                                    this.totemOrderListing[0].TotalPage),
                                  (this.totalItem2 =
                                    this.totemOrderListing[0].TotalRow))
                                : ((this.totalPage2 = 0),
                                  (this.totalItem2 = 0));
                            case 5:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return _.apply(this, arguments);
                }),
              init: function () {
                var t = m()("body");
                m()(".sort-by-product-area").length &&
                  (m()(".sort-by-product-area").on(
                    "click",
                    ".sort-by-product-wrap",
                    function (t) {
                      m()(".sort-by-cover").removeClass("show"),
                        m()(".sort-by-dropdown").removeClass("show"),
                        t.preventDefault();
                      var e = m()(this);
                      e.parent().hasClass("show")
                        ? e
                            .siblings(".sort-by-dropdown")
                            .removeClass("show")
                            .parent()
                            .removeClass("show")
                        : e
                            .siblings(".sort-by-dropdown")
                            .addClass("show")
                            .parent()
                            .addClass("show");
                    }
                  ),
                  t.on("click", function (t) {
                    var e = t.target;
                    m()(e).parents().is(".sort-by-product-area") ||
                      (m()(".sort-by-cover").removeClass("show"),
                      m()(".sort-by-dropdown").removeClass("show"));
                  }));
                this.searchTroops(), this.searchTotem();
              },
            }
          ),
        },
        k = S,
        x = (r(1276), r(65)),
        component = Object(x.a)(
          k,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "main",
              { staticClass: "main ob pb-50" },
              [
                t._m(0),
                t._v(" "),
                o("section", { staticClass: "openbox mt-10 mb-50" }, [
                  o("div", { staticClass: "container" }, [
                    o("div", { staticClass: "row" }, [
                      o("div", { staticClass: "col-12" }, [
                        t._m(1),
                        t._v(" "),
                        o(
                          "div",
                          {
                            staticClass: "tab-content wow fadeIn animated",
                            attrs: { id: "marketplace-tabcontent" },
                          },
                          [
                            o(
                              "div",
                              {
                                staticClass: "tab-pane fade ",
                                attrs: {
                                  id: "tab-one",
                                  role: "tabpanel",
                                  "aria-labelledby": "tab-one",
                                },
                              },
                              [
                                o(
                                  "div",
                                  { staticClass: "shop-product-fillter" },
                                  [
                                    o(
                                      "div",
                                      { staticClass: "totall-product" },
                                      [
                                        t._v(
                                          "\n                                        We found "
                                        ),
                                        o("strong", [
                                          t._v(t._s(this.totalItem1)),
                                        ]),
                                        t._v(
                                          " items for you!\n                                    "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    o(
                                      "div",
                                      { staticClass: "sort-by-product-area" },
                                      [
                                        o(
                                          "div",
                                          {
                                            staticClass: "sort-by-cover mr-10",
                                            attrs: { id: "showcover_1" },
                                          },
                                          [
                                            t._m(2),
                                            t._v(" "),
                                            o(
                                              "div",
                                              {
                                                staticClass: "sort-by-dropdown",
                                                attrs: { id: "dropdownShow_1" },
                                              },
                                              [
                                                o("ul", [
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_1 active",
                                                        attrs: {
                                                          id: "dropdownShow50_1",
                                                          href: "#",
                                                          value: "50",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange1,
                                                        },
                                                      },
                                                      [t._v("50")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_1",
                                                        attrs: {
                                                          id: "dropdownShow100_1",
                                                          href: "#",
                                                          value: "100",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange1,
                                                        },
                                                      },
                                                      [t._v("100")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_1",
                                                        attrs: {
                                                          id: "dropdownShow150_1",
                                                          href: "#",
                                                          value: "150",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange1,
                                                        },
                                                      },
                                                      [t._v("150")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_1",
                                                        attrs: {
                                                          id: "dropdownShow200_1",
                                                          href: "#",
                                                          value: "200",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange1,
                                                        },
                                                      },
                                                      [t._v("200")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_1",
                                                        attrs: {
                                                          id: "dropdownShowAll_1",
                                                          href: "#",
                                                          value: "-1",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange1,
                                                        },
                                                      },
                                                      [t._v("All")]
                                                    ),
                                                  ]),
                                                ]),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        o(
                                          "div",
                                          {
                                            staticClass: "sort-by-cover",
                                            attrs: { id: "sortcover_1" },
                                          },
                                          [
                                            t._m(3),
                                            t._v(" "),
                                            o(
                                              "div",
                                              {
                                                staticClass: "sort-by-dropdown",
                                                attrs: { id: "dropdownSort_1" },
                                              },
                                              [
                                                o("ul", [
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownSort_1 active",
                                                        attrs: {
                                                          id: "dropdownSort1_1",
                                                          href: "#",
                                                          value: "1",
                                                          text: "Popular",
                                                        },
                                                        on: {
                                                          click:
                                                            t.sortbyOnChange1,
                                                        },
                                                      },
                                                      [t._v("Popular")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownSort_1",
                                                        attrs: {
                                                          id: "dropdownSort2_1",
                                                          href: "#",
                                                          value: "2",
                                                          text: "New Added",
                                                        },
                                                        on: {
                                                          click:
                                                            t.sortbyOnChange1,
                                                        },
                                                      },
                                                      [t._v("New Added")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownSort_1",
                                                        attrs: {
                                                          id: "dropdownSort3_1",
                                                          href: "#",
                                                          value: "3",
                                                          text: "Price: Low to High",
                                                        },
                                                        on: {
                                                          click:
                                                            t.sortbyOnChange1,
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          "Price: Low to High"
                                                        ),
                                                      ]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownSort_1",
                                                        attrs: {
                                                          id: "dropdownSort4_1",
                                                          href: "#",
                                                          value: "4",
                                                          text: "Price: High to Low",
                                                        },
                                                        on: {
                                                          click:
                                                            t.sortbyOnChange1,
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          "Price: High to Low"
                                                        ),
                                                      ]
                                                    ),
                                                  ]),
                                                ]),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                o(
                                  "div",
                                  { staticClass: "row product-grid-3" },
                                  t._l(t.troopsOrderListing, function (e, n) {
                                    var c = e.AssetName,
                                      l = e.PriceUSD,
                                      d = e.Currency,
                                      v = e.AssetURI,
                                      m = e.PreviewImageURI,
                                      h = e.Price,
                                      w = e.ContractAddress,
                                      _ = e.TokenId,
                                      C = e.OwnerWalletAddress,
                                      f = e.OnwerWalletAddressShort,
                                      y = e.OwnerDisplayName,
                                      S = e.OwnerOwnQuantity,
                                      k = e.Troop,
                                      x = e.AssetId,
                                      L = e.NumberofLike,
                                      N = e.CollectionId;
                                    return o(
                                      "div",
                                      {
                                        key: "troop_" + n,
                                        staticClass:
                                          "col-md-3 col-12 col-sm-6 mb-30",
                                      },
                                      [
                                        o(
                                          "div",
                                          {
                                            staticClass:
                                              "product-cart-wrap  h-100",
                                          },
                                          [
                                            o(
                                              "div",
                                              {
                                                staticClass:
                                                  "product-img-action-wrap product-img-action-wrap1",
                                              },
                                              [
                                                o(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "product-img product-img1",
                                                  },
                                                  [
                                                    o(
                                                      "nuxt-link",
                                                      {
                                                        attrs: {
                                                          to: {
                                                            name: "Asset1155",
                                                            params: {
                                                              contractAddress:
                                                                w,
                                                              tokenId: _,
                                                              ownerAddress: C,
                                                            },
                                                          },
                                                        },
                                                      },
                                                      [
                                                        ".mp3" !=
                                                          v
                                                            .slice(-4)
                                                            .toLowerCase() &&
                                                        ".mp4" !=
                                                          v
                                                            .slice(-4)
                                                            .toLowerCase()
                                                          ? o(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "product-img-content product-img-content1",
                                                              },
                                                              [
                                                                k
                                                                  ? o(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "inner is-troop",
                                                                        style: {
                                                                          backgroundImage:
                                                                            "url('" +
                                                                            t.getTroopBackgroundImage(
                                                                              k
                                                                            ) +
                                                                            "')",
                                                                        },
                                                                      },
                                                                      [
                                                                        o(
                                                                          "img",
                                                                          {
                                                                            staticClass:
                                                                              "troop",
                                                                            attrs:
                                                                              {
                                                                                src: v,
                                                                              },
                                                                          }
                                                                        ),
                                                                        t._v(
                                                                          " "
                                                                        ),
                                                                        o(
                                                                          "img",
                                                                          {
                                                                            staticClass:
                                                                              "grade",
                                                                            attrs:
                                                                              {
                                                                                src: t.getGradeStoneIcon(
                                                                                  k.Type
                                                                                ),
                                                                              },
                                                                          }
                                                                        ),
                                                                        t._v(
                                                                          " "
                                                                        ),
                                                                        o(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "banner-wrapper",
                                                                          },
                                                                          [
                                                                            o(
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "banner",
                                                                              },
                                                                              [
                                                                                o(
                                                                                  "span",
                                                                                  {
                                                                                    staticClass:
                                                                                      "ranking-name",
                                                                                  },
                                                                                  [
                                                                                    t._v(
                                                                                      " " +
                                                                                        t._s(
                                                                                          k.RankingName
                                                                                        ) +
                                                                                        " "
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                                t._v(
                                                                                  " "
                                                                                ),
                                                                                o(
                                                                                  "span",
                                                                                  {
                                                                                    staticClass:
                                                                                      "character-name",
                                                                                  },
                                                                                  [
                                                                                    t._v(
                                                                                      " " +
                                                                                        t._s(
                                                                                          k.CharacterName
                                                                                        ) +
                                                                                        " "
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                              ]
                                                                            ),
                                                                          ]
                                                                        ),
                                                                        t._v(
                                                                          " "
                                                                        ),
                                                                        o(
                                                                          "img",
                                                                          {
                                                                            staticClass:
                                                                              "mainattr",
                                                                            attrs:
                                                                              {
                                                                                src: t.getTroopMainAttrImg(
                                                                                  k.MainAttr
                                                                                ),
                                                                              },
                                                                          }
                                                                        ),
                                                                        t._v(
                                                                          " "
                                                                        ),
                                                                        o(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "text-right d-flex align-items-center hammer",
                                                                          },
                                                                          [
                                                                            o(
                                                                              "img",
                                                                              {
                                                                                attrs:
                                                                                  {
                                                                                    src: r(
                                                                                      1197
                                                                                    ),
                                                                                  },
                                                                              }
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            o(
                                                                              "span",
                                                                              [
                                                                                t._v(
                                                                                  " " +
                                                                                    t._s(
                                                                                      k.MiningPower
                                                                                    ) +
                                                                                    " "
                                                                                ),
                                                                              ]
                                                                            ),
                                                                          ]
                                                                        ),
                                                                      ]
                                                                    )
                                                                  : o(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "inner",
                                                                        staticStyle:
                                                                          {
                                                                            "background-color":
                                                                              "transparent",
                                                                          },
                                                                      },
                                                                      [
                                                                        o(
                                                                          "img",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                src: m,
                                                                                alt: "",
                                                                                loading:
                                                                                  "lazy",
                                                                              },
                                                                          }
                                                                        ),
                                                                      ]
                                                                    ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        ".mp4" ==
                                                        v
                                                          .slice(-4)
                                                          .toLowerCase()
                                                          ? o(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "product-video-wrapper",
                                                              },
                                                              [
                                                                o(
                                                                  "video",
                                                                  {
                                                                    attrs: {
                                                                      controls:
                                                                        "",
                                                                      loop: "loop",
                                                                      muted:
                                                                        "muted",
                                                                    },
                                                                    domProps: {
                                                                      muted: !0,
                                                                    },
                                                                  },
                                                                  [
                                                                    o(
                                                                      "source",
                                                                      {
                                                                        attrs: {
                                                                          src: t.uriWithStartTime(
                                                                            v
                                                                          ),
                                                                          type: "video/mp4",
                                                                        },
                                                                      }
                                                                    ),
                                                                    t._v(
                                                                      "\n                                                                HTML5 video tag is not supported in your browser\n                                                            "
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        ".mp3" ==
                                                        v
                                                          .slice(-4)
                                                          .toLowerCase()
                                                          ? o(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "product-audio-wrapper",
                                                                staticStyle: {
                                                                  "background-image":
                                                                    "url('/assets/img/default-img-audio.jpg')",
                                                                },
                                                              },
                                                              [
                                                                o(
                                                                  "audio",
                                                                  {
                                                                    attrs: {
                                                                      controls:
                                                                        "",
                                                                    },
                                                                  },
                                                                  [
                                                                    o(
                                                                      "source",
                                                                      {
                                                                        attrs: {
                                                                          src: v,
                                                                          type: "audio/mp3",
                                                                        },
                                                                      }
                                                                    ),
                                                                    t._v(
                                                                      "\n                                                                Your browser does not support the audio element.\n                                                            "
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            )
                                                          : t._e(),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            o(
                                              "div",
                                              {
                                                staticClass:
                                                  "product-content-wrap product-content-wrap1",
                                                staticStyle: {
                                                  "background-color":
                                                    "#F2EBE0 !important",
                                                },
                                              },
                                              [
                                                o(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "product-category",
                                                  },
                                                  [
                                                    y && y.length > 0
                                                      ? o(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "assetOwner",
                                                          },
                                                          [
                                                            o(
                                                              "NuxtLink",
                                                              {
                                                                attrs: {
                                                                  to:
                                                                    "/Artist/" +
                                                                    C,
                                                                },
                                                              },
                                                              [t._v(t._s(y))]
                                                            ),
                                                          ],
                                                          1
                                                        )
                                                      : t._e(),
                                                    t._v(" "),
                                                    y
                                                      ? t._e()
                                                      : o(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "assetOwner",
                                                          },
                                                          [
                                                            o(
                                                              "NuxtLink",
                                                              {
                                                                attrs: {
                                                                  to:
                                                                    "/Artist/" +
                                                                    C,
                                                                },
                                                              },
                                                              [t._v(t._s(f))]
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                    t._v(" "),
                                                    o(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "productOwerOwn float-right",
                                                      },
                                                      [
                                                        o("i", {
                                                          staticClass:
                                                            "fi-rr-user text-gray",
                                                        }),
                                                        t._v(" "),
                                                        o(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "font-small text-gray",
                                                          },
                                                          [
                                                            t._v(
                                                              " owner own " +
                                                                t._s(S)
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                o("h2", [
                                                  o(
                                                    "a",
                                                    { attrs: { href: "#" } },
                                                    [t._v(t._s(c))]
                                                  ),
                                                ]),
                                                t._v(" "),
                                                o(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "product-price",
                                                  },
                                                  [
                                                    o("span", [
                                                      t._v(
                                                        t._s(
                                                          Number(
                                                            h
                                                          ).toLocaleString()
                                                        ) +
                                                          " " +
                                                          t._s(d)
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    o(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "old-price",
                                                        staticStyle: {
                                                          "text-decoration":
                                                            "none",
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          "$ " +
                                                            t._s(
                                                              Number(
                                                                l
                                                              ).toLocaleString()
                                                            ) +
                                                            " USD"
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                o(
                                                  "div",
                                                  { staticClass: "cta mt-10" },
                                                  [
                                                    o(
                                                      "nuxt-link",
                                                      {
                                                        staticClass:
                                                          "btn btn-outline btn-sm",
                                                        attrs: {
                                                          to: {
                                                            name: "Asset1155",
                                                            params: {
                                                              contractAddress:
                                                                w,
                                                              tokenId: _,
                                                              ownerAddress: C,
                                                            },
                                                          },
                                                        },
                                                      },
                                                      [t._v("Details")]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            o(
                                              "div",
                                              {
                                                staticClass:
                                                  "likeshare-wrapper",
                                              },
                                              [
                                                o(
                                                  "div",
                                                  { staticClass: "row" },
                                                  [
                                                    o(
                                                      "div",
                                                      {
                                                        staticClass: "col-md-6",
                                                      },
                                                      [
                                                        o(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "only-share",
                                                          },
                                                          [
                                                            o(
                                                              "a",
                                                              {
                                                                staticClass:
                                                                  "share action-btn hover-up",
                                                                attrs: {
                                                                  "aria-label":
                                                                    "Share This",
                                                                  "data-bs-toggle":
                                                                    "modal",
                                                                  "data-bs-target":
                                                                    "#shareThiswModal",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.openShareModal(
                                                                        w,
                                                                        _,
                                                                        C,
                                                                        N,
                                                                        t.SellOrderId
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                t._m(4, !0),
                                                                t._v(
                                                                  " Share This"
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    o(
                                                      "div",
                                                      {
                                                        staticClass: "col-md-6",
                                                      },
                                                      [
                                                        o(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "only-like",
                                                          },
                                                          [
                                                            o(
                                                              "a",
                                                              {
                                                                staticClass:
                                                                  "like",
                                                                attrs: {
                                                                  href: "javascript:void(0)",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return t.likeAsset(
                                                                        x
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                o(
                                                                  "span",
                                                                  {
                                                                    class:
                                                                      "like_" +
                                                                      x,
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      t._s(L)
                                                                    ),
                                                                  ]
                                                                ),
                                                                t._v(" Likes"),
                                                                o(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "heart",
                                                                  },
                                                                  [
                                                                    o("i", {
                                                                      staticClass:
                                                                        "fa-heart",
                                                                      class: [
                                                                        t.likedAssetList.indexOf(
                                                                          x
                                                                        ) >= 0
                                                                          ? "fas selected-heart"
                                                                          : "far  border-heart",
                                                                        "heart_" +
                                                                          x,
                                                                      ],
                                                                    }),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    );
                                  }),
                                  0
                                ),
                                t._v(" "),
                                this.totalPage1 > 1
                                  ? o(
                                      "div",
                                      {
                                        staticClass:
                                          "pagination-area mt-15 mb-sm-5 mb-lg-0",
                                      },
                                      [
                                        [
                                          o("sliding-pagination", {
                                            attrs: {
                                              current: t.current1,
                                              total: t.totalPage1,
                                            },
                                            on: {
                                              "page-change": t.onPageChange1,
                                            },
                                          }),
                                        ],
                                      ],
                                      2
                                    )
                                  : t._e(),
                              ]
                            ),
                            t._v(" "),
                            o(
                              "div",
                              {
                                staticClass: "tab-pane fade show active",
                                attrs: {
                                  id: "tab-two",
                                  role: "tabpanel",
                                  "aria-labelledby": "tab-two",
                                },
                              },
                              [
                                o(
                                  "div",
                                  { staticClass: "shop-product-fillter" },
                                  [
                                    o(
                                      "div",
                                      { staticClass: "totall-product" },
                                      [
                                        t._v(
                                          "\n                                        We found "
                                        ),
                                        o("strong", [
                                          t._v(t._s(this.totalItem2)),
                                        ]),
                                        t._v(
                                          " items for you!\n                                    "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    o(
                                      "div",
                                      { staticClass: "sort-by-product-area" },
                                      [
                                        o(
                                          "div",
                                          {
                                            staticClass: "sort-by-cover mr-10",
                                            attrs: { id: "showcover_2" },
                                          },
                                          [
                                            t._m(5),
                                            t._v(" "),
                                            o(
                                              "div",
                                              {
                                                staticClass: "sort-by-dropdown",
                                                attrs: { id: "dropdownShow_2" },
                                              },
                                              [
                                                o("ul", [
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_2 active",
                                                        attrs: {
                                                          id: "dropdownShow50_2",
                                                          href: "#",
                                                          value: "50",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange2,
                                                        },
                                                      },
                                                      [t._v("50")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_2",
                                                        attrs: {
                                                          id: "dropdownShow100_2",
                                                          href: "#",
                                                          value: "100",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange2,
                                                        },
                                                      },
                                                      [t._v("100")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_2",
                                                        attrs: {
                                                          id: "dropdownShow150_2",
                                                          href: "#",
                                                          value: "150",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange2,
                                                        },
                                                      },
                                                      [t._v("150")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_2",
                                                        attrs: {
                                                          id: "dropdownShow200_2",
                                                          href: "#",
                                                          value: "200",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange2,
                                                        },
                                                      },
                                                      [t._v("200")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_2",
                                                        attrs: {
                                                          id: "dropdownShowAll_2",
                                                          href: "#",
                                                          value: "-1",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange2,
                                                        },
                                                      },
                                                      [t._v("All")]
                                                    ),
                                                  ]),
                                                ]),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        o(
                                          "div",
                                          {
                                            staticClass: "sort-by-cover",
                                            attrs: { id: "sortcover_2" },
                                          },
                                          [
                                            t._m(6),
                                            t._v(" "),
                                            o(
                                              "div",
                                              {
                                                staticClass: "sort-by-dropdown",
                                                attrs: { id: "dropdownSort_2" },
                                              },
                                              [
                                                o("ul", [
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownSort_2 active",
                                                        attrs: {
                                                          id: "dropdownSort6_2",
                                                          href: "#",
                                                          value: "6",
                                                          text: "Quantity",
                                                        },
                                                        on: {
                                                          click:
                                                            t.sortbyOnChange2,
                                                        },
                                                      },
                                                      [t._v("Quantity")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownSort_2",
                                                        attrs: {
                                                          id: "dropdownSort1_2",
                                                          href: "#",
                                                          value: "1",
                                                          text: "Popular",
                                                        },
                                                        on: {
                                                          click:
                                                            t.sortbyOnChange2,
                                                        },
                                                      },
                                                      [t._v("Popular")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownSort_2",
                                                        attrs: {
                                                          id: "dropdownSort2_2",
                                                          href: "#",
                                                          value: "2",
                                                          text: "New Added",
                                                        },
                                                        on: {
                                                          click:
                                                            t.sortbyOnChange2,
                                                        },
                                                      },
                                                      [t._v("New Added")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownSort_2",
                                                        attrs: {
                                                          id: "dropdownSort3_2",
                                                          href: "#",
                                                          value: "3",
                                                          text: "Price: Low to High",
                                                        },
                                                        on: {
                                                          click:
                                                            t.sortbyOnChange2,
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          "Price: Low to High"
                                                        ),
                                                      ]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownSort_2",
                                                        attrs: {
                                                          id: "dropdownSort4_2",
                                                          href: "#",
                                                          value: "4",
                                                          text: "Price: High to Low",
                                                        },
                                                        on: {
                                                          click:
                                                            t.sortbyOnChange2,
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          "Price: High to Low"
                                                        ),
                                                      ]
                                                    ),
                                                  ]),
                                                ]),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                o(
                                  "div",
                                  { staticClass: "row product-grid-3" },
                                  t._l(t.totemOrderListing, function (e, r) {
                                    var n = e.Currency,
                                      c = e.SellQuantity,
                                      l = e.PriceUSD,
                                      d = e.AssetName,
                                      v = e.AssetURI,
                                      m = e.Price,
                                      h = e.ContractAddress,
                                      w = e.TokenId,
                                      _ = e.OwnerWalletAddress,
                                      C = e.SaleAssetId;
                                    return o(
                                      "div",
                                      {
                                        key: "totem_" + r,
                                        staticClass:
                                          "col-md-3 col-12 col-sm-6 mb-30",
                                      },
                                      [
                                        o(
                                          "div",
                                          {
                                            staticClass:
                                              "product-cart-wrap h-100",
                                          },
                                          [
                                            o("div", { staticClass: "inner" }, [
                                              o(
                                                "div",
                                                {
                                                  staticClass:
                                                    "total-troops text-center",
                                                },
                                                [
                                                  o(
                                                    "h2",
                                                    {
                                                      staticClass: "assetName",
                                                    },
                                                    [
                                                      t._v(t._s(d) + " "),
                                                      o("span", [
                                                        t._v("x" + t._s(c)),
                                                      ]),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  o(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "product-price",
                                                      staticStyle: {
                                                        "padding-top": "5px",
                                                      },
                                                    },
                                                    [
                                                      o(
                                                        "span",
                                                        {
                                                          staticClass: "price",
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              Number(
                                                                m
                                                              ).toLocaleString()
                                                            ) +
                                                              " " +
                                                              t._s(n) +
                                                              " "
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      l
                                                        ? o(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "usd-price",
                                                            },
                                                            [
                                                              t._v(
                                                                "$" +
                                                                  t._s(
                                                                    Number(
                                                                      l
                                                                    ).toLocaleString()
                                                                  ) +
                                                                  " USD"
                                                              ),
                                                            ]
                                                          )
                                                        : t._e(),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              o(
                                                "div",
                                                {
                                                  staticClass:
                                                    "product-img-action-wrap",
                                                },
                                                [
                                                  o(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "product-img",
                                                    },
                                                    [
                                                      o(
                                                        "nuxt-link",
                                                        {
                                                          attrs: {
                                                            to: {
                                                              name: "TotemRoute",
                                                              params: {
                                                                contractAddress:
                                                                  h,
                                                                tokenId: w,
                                                                ownerAddress: _,
                                                                sellOrderId: C,
                                                              },
                                                            },
                                                          },
                                                        },
                                                        [
                                                          o(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "product-img-content",
                                                            },
                                                            [
                                                              o(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "inner",
                                                                  staticStyle: {
                                                                    "background-color":
                                                                      "transparent",
                                                                  },
                                                                },
                                                                [
                                                                  o("img", {
                                                                    attrs: {
                                                                      src: v,
                                                                    },
                                                                  }),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              t._m(7, !0),
                                            ]),
                                          ]
                                        ),
                                      ]
                                    );
                                  }),
                                  0
                                ),
                                t._v(" "),
                                this.totalPage2 > 1
                                  ? o(
                                      "div",
                                      {
                                        staticClass:
                                          "pagination-area mt-15 mb-sm-5 mb-lg-0",
                                      },
                                      [
                                        [
                                          o("sliding-pagination", {
                                            attrs: {
                                              current: t.current2,
                                              total: t.totalPage2,
                                            },
                                            on: {
                                              "page-change": t.onPageChange2,
                                            },
                                          }),
                                        ],
                                      ],
                                      2
                                    )
                                  : t._e(),
                              ]
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                t._v(" "),
                o("ShareAsset"),
                t._v(" "),
                o("router-view"),
                t._v(" "),
                o("ShareAsset"),
              ],
              1
            );
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "section",
                { staticClass: "home-slider position-relative" },
                [
                  r(
                    "div",
                    {
                      staticClass:
                        "hero-slider-1 dot-style-1 dot-style-1-position-1 countdown",
                      staticStyle: {
                        "background-image":
                          "url(assets/img/01_Stone_Arena_Header_01_bg.png)",
                      },
                    },
                    [
                      r(
                        "div",
                        {
                          staticClass:
                            "single-hero-slider single-animation-wrap",
                          staticStyle: {
                            "background-image":
                              "url(assets/img/01_Stone_Arena_Header_01_bg.png)",
                            display: "block !important",
                          },
                        },
                        [
                          r(
                            "div",
                            {
                              staticClass:
                                "container d-none d-md-block d-lg-block",
                            },
                            [
                              r(
                                "div",
                                {
                                  staticClass:
                                    "row align-items-center slider-animated-1",
                                  staticStyle: {
                                    "align-items": "baseline !important",
                                  },
                                },
                                [
                                  r(
                                    "div",
                                    { staticClass: "col-lg-6 col-md-6" },
                                    [
                                      r(
                                        "div",
                                        {
                                          staticClass:
                                            "single-slider-img single-slider-img-1 ",
                                        },
                                        [
                                          r("img", {
                                            staticClass: "animated slider-1-1",
                                            staticStyle: {
                                              "padding-top": "30px",
                                            },
                                            attrs: {
                                              src: "/assets/img/02_Stone_Arena_Header_02_character.png",
                                              alt: "",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  r(
                                    "div",
                                    { staticClass: "col-lg-6 col-md-6" },
                                    [
                                      r(
                                        "div",
                                        {
                                          staticClass:
                                            "single-slider-img single-slider-img-1 box bounce-2",
                                        },
                                        [
                                          r(
                                            "a",
                                            {
                                              attrs: {
                                                href: "#",
                                                target: "_blank",
                                              },
                                            },
                                            [
                                              r("img", {
                                                staticClass:
                                                  "animated slider-1-1",
                                                staticStyle: {
                                                  "max-height": "370px",
                                                  "padding-bottom": "30px",
                                                },
                                                attrs: {
                                                  src: "/assets/img/03_Stone_Arena_Header_03_totem.png",
                                                  alt: "",
                                                },
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          t._v(" "),
                          r(
                            "div",
                            {
                              staticClass:
                                "container d-sm-block d-md-none d-lg-none",
                            },
                            [
                              r(
                                "div",
                                {
                                  staticClass:
                                    "row align-items-center slider-animated-1",
                                },
                                [
                                  r(
                                    "div",
                                    {
                                      staticClass:
                                        "col-lg-6 col-md-6 offset-lg-1",
                                    },
                                    [
                                      r(
                                        "div",
                                        {
                                          staticClass:
                                            "hero-slider-content-2    box bounce-2",
                                          staticStyle: {
                                            "padding-bottom": "0px",
                                            "max-height": "180px !important",
                                            "padding-top": "70px",
                                          },
                                        },
                                        [
                                          r(
                                            "a",
                                            {
                                              attrs: {
                                                href: "#",
                                                target: "_blank",
                                              },
                                            },
                                            [
                                              r("img", {
                                                staticClass: "animated",
                                                staticStyle: {
                                                  "max-height":
                                                    "140px !important",
                                                  display: "inline-block",
                                                },
                                                attrs: {
                                                  src: "/assets/img/03_Stone_Arena_Header_03_totem.png",
                                                  alt: "",
                                                },
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  t._v(" "),
                                  r(
                                    "div",
                                    { staticClass: "col-lg-5 col-md-6" },
                                    [
                                      r(
                                        "div",
                                        {
                                          staticClass:
                                            "single-slider-img single-slider-img-11 hero-slider-content-2",
                                        },
                                        [
                                          r("img", {
                                            staticClass: "animated slider-1-1",
                                            staticStyle: {
                                              left: "00px",
                                              "max-height": "260px",
                                            },
                                            attrs: {
                                              src: "/assets/img/02_Stone_Arena_Header_02_character.png",
                                              alt: "",
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              );
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { staticClass: "tab-header" }, [
                r(
                  "ul",
                  {
                    staticClass: "nav nav-tabs marketplace-tab",
                    attrs: { id: "marketplace-tab", role: "tablist" },
                  },
                  [
                    r(
                      "li",
                      {
                        staticClass: "nav-item",
                        attrs: { role: "presentation" },
                      },
                      [
                        r(
                          "button",
                          {
                            staticClass: "nav-link active marketplace-nav-tab ",
                            attrs: {
                              id: "nav-tab-two",
                              "data-bs-toggle": "tab",
                              "data-bs-target": "#tab-two",
                              type: "button",
                              role: "tab",
                              "aria-controls": "tab-two",
                              "aria-selected": "false",
                            },
                          },
                          [
                            r("div", { attrs: { id: "blinkdiv" } }, [
                              r("img", {
                                staticClass: "mr-5",
                                attrs: {
                                  src: "/assets/img/mysterybox.png",
                                  width: "25",
                                  alt: "",
                                },
                              }),
                              t._v(" Totems"),
                            ]),
                          ]
                        ),
                      ]
                    ),
                    t._v(" "),
                    r(
                      "li",
                      {
                        staticClass: "nav-item",
                        attrs: { role: "presentation" },
                      },
                      [
                        r(
                          "button",
                          {
                            staticClass: "nav-link",
                            attrs: {
                              id: "marketplace-nav-tab",
                              "data-bs-toggle": "tab",
                              "data-bs-target": "#tab-one",
                              type: "button",
                              role: "tab",
                              "aria-controls": "tab-one",
                              "aria-selected": "true",
                            },
                          },
                          [
                            r("div", { attrs: { id: "blinkdiv2" } }, [
                              r("img", {
                                staticClass: "mr-5",
                                attrs: {
                                  src: "/assets/img/mysterybox.png",
                                  width: "25",
                                  alt: "",
                                },
                              }),
                              t._v(" Troops"),
                            ]),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { staticClass: "sort-by-product-wrap" }, [
                r("div", { staticClass: "sort-by" }, [
                  r("span", [
                    r("i", { staticClass: "fi-rs-apps" }),
                    t._v("Show:"),
                  ]),
                ]),
                t._v(" "),
                r("div", { staticClass: "sort-by-dropdown-wrap" }, [
                  r("span", { attrs: { id: "dropdownShowLabel_1" } }, [
                    t._v(" 50 "),
                  ]),
                  r("i", { staticClass: "fi-rs-angle-small-down" }),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { staticClass: "sort-by-product-wrap" }, [
                r("div", { staticClass: "sort-by" }, [
                  r("span", [
                    r("i", { staticClass: "fi-rs-apps-sort" }),
                    t._v("Sort by:"),
                  ]),
                ]),
                t._v(" "),
                r("div", { staticClass: "sort-by-dropdown-wrap" }, [
                  r("span", { attrs: { id: "dropdownSortLabel_1" } }, [
                    t._v(" Popular "),
                  ]),
                  r("i", { staticClass: "fi-rs-angle-small-down" }),
                ]),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "heart" }, [
                e("i", { staticClass: "fi-rr-share" }),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { staticClass: "sort-by-product-wrap" }, [
                r("div", { staticClass: "sort-by" }, [
                  r("span", [
                    r("i", { staticClass: "fi-rs-apps" }),
                    t._v("Show:"),
                  ]),
                ]),
                t._v(" "),
                r("div", { staticClass: "sort-by-dropdown-wrap" }, [
                  r("span", { attrs: { id: "dropdownShowLabel_2" } }, [
                    t._v(" 50 "),
                  ]),
                  r("i", { staticClass: "fi-rs-angle-small-down" }),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { staticClass: "sort-by-product-wrap" }, [
                r("div", { staticClass: "sort-by" }, [
                  r("span", [
                    r("i", { staticClass: "fi-rs-apps-sort" }),
                    t._v("Sort by:"),
                  ]),
                ]),
                t._v(" "),
                r("div", { staticClass: "sort-by-dropdown-wrap" }, [
                  r("span", { attrs: { id: "dropdownSortLabel_2" } }, [
                    t._v(" Quantity "),
                  ]),
                  r("i", { staticClass: "fi-rs-angle-small-down" }),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { staticClass: "product-content-wrap" }, [
                r("div", { staticClass: "row statistic" }, [
                  r("div", { staticClass: "col-4 item" }, [
                    r("div", { staticClass: "circle" }, [
                      r("div", { staticClass: "dot c1" }),
                    ]),
                    t._v(" "),
                    r("div", { staticClass: "detail" }, [
                      r("strong", [t._v("59%")]),
                      r("br"),
                      t._v(" "),
                      r("small", { staticClass: "text-muted" }, [
                        t._v("Member"),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  r("div", { staticClass: "col-4 item" }, [
                    r("div", { staticClass: "circle" }, [
                      r("div", { staticClass: "dot c2" }),
                    ]),
                    t._v(" "),
                    r("div", { staticClass: "detail" }, [
                      r("strong", [t._v("29.5%")]),
                      r("br"),
                      t._v(" "),
                      r("small", { staticClass: "text-muted" }, [
                        t._v("Expert"),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  r("div", { staticClass: "col-4 item" }, [
                    r("div", { staticClass: "circle" }, [
                      r("div", { staticClass: "dot c3" }),
                    ]),
                    t._v(" "),
                    r("div", { staticClass: "detail" }, [
                      r("strong", [t._v("7.4%")]),
                      r("br"),
                      t._v(" "),
                      r(
                        "small",
                        {
                          staticClass: "text-muted",
                          staticStyle: { "white-space": "nowrap" },
                        },
                        [t._v("Champion")]
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  r("div", { staticClass: "col-4 item" }, [
                    r("div", { staticClass: "circle" }, [
                      r("div", { staticClass: "dot c4" }),
                    ]),
                    t._v(" "),
                    r("div", { staticClass: "detail" }, [
                      r("strong", [t._v("1.8%")]),
                      r("br"),
                      t._v(" "),
                      r("small", { staticClass: "text-muted" }, [
                        t._v("Leader"),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  r("div", { staticClass: "col-4 item" }, [
                    r("div", { staticClass: "circle" }, [
                      r("div", { staticClass: "dot c5" }),
                    ]),
                    t._v(" "),
                    r("div", { staticClass: "detail" }, [
                      r("strong", [t._v("0.5%")]),
                      r("br"),
                      t._v(" "),
                      r("small", { staticClass: "text-muted" }, [t._v("Lord")]),
                    ]),
                  ]),
                  t._v(" "),
                  r("div", { staticClass: "col-4 item" }, [
                    r("img", {
                      staticClass: "align-top",
                      staticStyle: { "margin-right": "2px" },
                      attrs: {
                        src: "/assets/img/Binance-Coin-BNB-icon.png",
                        width: "20",
                        alt: "",
                      },
                    }),
                    t._v(" "),
                    r("div", { staticClass: "detail" }, [
                      r("strong", [t._v("1.8%")]),
                      r("br"),
                      t._v(" "),
                      r("small", { staticClass: "text-muted" }, [t._v("BNB")]),
                    ]),
                  ]),
                ]),
              ]);
            },
          ],
          !1,
          null,
          "78153692",
          null
        );
      e.default = component.exports;
      installComponents(component, { ShareAsset: r(1188).default });
    },
  },
]);
