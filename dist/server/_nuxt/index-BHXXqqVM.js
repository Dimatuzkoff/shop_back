import { computed, ref, watch, createVNode, mergeProps, Fragment, nextTick, unref, useSSRContext, withCtx, createTextVNode, openBlock, createBlock, renderList, defineComponent, withModifiers, toDisplayString, withDirectives, vModelText, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr } from "vue/server-renderer";
import axios from "axios";
import { p as propsFactory, w as wrapInArray, g as genericComponent, c as useLocale, d as useProxiedModel, h as humanReadableFileSize, e as useRender, f as filterInputAttrs, j as forwardRefs, k as callEvent, l as useProductStore, m as useAppStore, V as VBtn, _ as _export_sfc, o as VImg, q as VIcon, s as omit, I as IconValue, t as getUid, v as VCard, x as VCardTitle, a as useRuntimeConfig, y as productMenu } from "../server.mjs";
import { m as makeVInputProps, a as makeVFieldProps, u as useFocus, V as VInput, f as filterFieldProps, b as VField, c as VCounter, d as VLabel, e as VForm, g as VTextField } from "./VTextField-DXFakm37.js";
import { V as VChip, m as makeVSelectionControlProps, a as VSelectionControl, b as makeSelectionControlGroupProps, c as VSelectionControlGroup, d as VSelect } from "./VSelect-B3_ZEPSh.js";
import { V as VRow, a as VCol } from "./VRow-DF0L_SZn.js";
import { V as VContainer } from "./VContainer-CuwDK_b8.js";
import { useForm, useField } from "vee-validate";
import { c as characteristicsSchemaKeys } from "./productCharacteristics-sAaRc816.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "ufo";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "./index-5c5MQmXM.js";
import "./VList-CqKp8YrM.js";
import "./ssrBoot-BtvJZs44.js";
const makeVFileInputProps = propsFactory({
  chips: Boolean,
  counter: Boolean,
  counterSizeString: {
    type: String,
    default: "$vuetify.fileInput.counterSize"
  },
  counterString: {
    type: String,
    default: "$vuetify.fileInput.counter"
  },
  hideInput: Boolean,
  multiple: Boolean,
  showSize: {
    type: [Boolean, Number, String],
    default: false,
    validator: (v) => {
      return typeof v === "boolean" || [1e3, 1024].includes(Number(v));
    }
  },
  ...makeVInputProps({
    prependIcon: "$file"
  }),
  modelValue: {
    type: [Array, Object],
    default: (props) => props.multiple ? [] : null,
    validator: (val) => {
      return wrapInArray(val).every((v) => v != null && typeof v === "object");
    }
  },
  ...makeVFieldProps({
    clearable: true
  })
}, "VFileInput");
const VFileInput = genericComponent()({
  name: "VFileInput",
  inheritAttrs: false,
  props: makeVFileInputProps(),
  emits: {
    "click:control": (e) => true,
    "mousedown:control": (e) => true,
    "update:focused": (focused) => true,
    "update:modelValue": (files) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const model = useProxiedModel(props, "modelValue", props.modelValue, (val) => wrapInArray(val), (val) => props.multiple || Array.isArray(props.modelValue) ? val : val[0]);
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const base = computed(() => typeof props.showSize !== "boolean" ? props.showSize : void 0);
    const totalBytes = computed(() => (model.value ?? []).reduce((bytes, _ref2) => {
      let {
        size = 0
      } = _ref2;
      return bytes + size;
    }, 0));
    const totalBytesReadable = computed(() => humanReadableFileSize(totalBytes.value, base.value));
    const fileNames = computed(() => (model.value ?? []).map((file) => {
      const {
        name = "",
        size = 0
      } = file;
      return !props.showSize ? name : `${name} (${humanReadableFileSize(size, base.value)})`;
    }));
    const counterValue = computed(() => {
      var _a;
      const fileCount = ((_a = model.value) == null ? void 0 : _a.length) ?? 0;
      if (props.showSize)
        return t(props.counterSizeString, fileCount, totalBytesReadable.value);
      else
        return t(props.counterString, fileCount);
    });
    const vInputRef = ref();
    const vFieldRef = ref();
    const inputRef = ref();
    const isActive = computed(() => isFocused.value || props.active);
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    function onFocus() {
      var _a;
      if (inputRef.value !== (void 0).activeElement) {
        (_a = inputRef.value) == null ? void 0 : _a.focus();
      }
      if (!isFocused.value)
        focus();
    }
    function onClickPrepend(e) {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.click();
    }
    function onControlMousedown(e) {
      emit("mousedown:control", e);
    }
    function onControlClick(e) {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.click();
      emit("click:control", e);
    }
    function onClear(e) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        model.value = [];
        callEvent(props["onClick:clear"], e);
      });
    }
    watch(model, (newValue) => {
      const hasModelReset = !Array.isArray(newValue) || !newValue.length;
      if (hasModelReset && inputRef.value) {
        inputRef.value.value = "";
      }
    });
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const {
        modelValue: _,
        ...inputProps
      } = VInput.filterProps(props);
      const fieldProps = filterFieldProps(props);
      return createVNode(VInput, mergeProps({
        "ref": vInputRef,
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-file-input", {
          "v-file-input--chips": !!props.chips,
          "v-file-input--hide": props.hideInput,
          "v-input--plain-underlined": isPlainOrUnderlined.value
        }, props.class],
        "style": props.style,
        "onClick:prepend": onClickPrepend
      }, rootAttrs, inputProps, {
        "centerAffix": !isPlainOrUnderlined.value,
        "focused": isFocused.value
      }), {
        ...slots,
        default: (_ref3) => {
          let {
            id,
            isDisabled,
            isDirty,
            isReadonly,
            isValid
          } = _ref3;
          return createVNode(VField, mergeProps({
            "ref": vFieldRef,
            "prepend-icon": props.prependIcon,
            "onMousedown": onControlMousedown,
            "onClick": onControlClick,
            "onClick:clear": onClear,
            "onClick:prependInner": props["onClick:prependInner"],
            "onClick:appendInner": props["onClick:appendInner"]
          }, fieldProps, {
            "id": id.value,
            "active": isActive.value || isDirty.value,
            "dirty": isDirty.value,
            "disabled": isDisabled.value,
            "focused": isFocused.value,
            "error": isValid.value === false
          }), {
            ...slots,
            default: (_ref4) => {
              var _a;
              let {
                props: {
                  class: fieldClass,
                  ...slotProps
                }
              } = _ref4;
              return createVNode(Fragment, null, [createVNode("input", mergeProps({
                "ref": inputRef,
                "type": "file",
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "multiple": props.multiple,
                "name": props.name,
                "onClick": (e) => {
                  e.stopPropagation();
                  if (isReadonly.value)
                    e.preventDefault();
                  onFocus();
                },
                "onChange": (e) => {
                  if (!e.target)
                    return;
                  const target = e.target;
                  model.value = [...target.files ?? []];
                },
                "onFocus": onFocus,
                "onBlur": blur
              }, slotProps, inputAttrs), null), createVNode("div", {
                "class": fieldClass
              }, [!!((_a = model.value) == null ? void 0 : _a.length) && !props.hideInput && (slots.selection ? slots.selection({
                fileNames: fileNames.value,
                totalBytes: totalBytes.value,
                totalBytesReadable: totalBytesReadable.value
              }) : props.chips ? fileNames.value.map((text) => createVNode(VChip, {
                "key": text,
                "size": "small",
                "text": text
              }, null)) : fileNames.value.join(", "))])]);
            }
          });
        },
        details: hasDetails ? (slotProps) => {
          var _a, _b;
          return createVNode(Fragment, null, [(_a = slots.details) == null ? void 0 : _a.call(slots, slotProps), hasCounter && createVNode(Fragment, null, [createVNode("span", null, null), createVNode(VCounter, {
            "active": !!((_b = model.value) == null ? void 0 : _b.length),
            "value": counterValue.value,
            "disabled": props.disabled
          }, slots.counter)])]);
        } : void 0
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, inputRef);
  }
});
const _sfc_main$4 = {
  __name: "Uploader",
  __ssrInlineRender: true,
  setup(__props) {
    const productStore = useProductStore();
    const apiUrl = process.env.NODE_ENV === "production" ? "https://shop-back-mh7t.onrender.com" : "http://localhost:3001";
    const handleFileUpload = async () => {
      const formData = new FormData();
      for (let i = 0; i < productStore.currentFiles.length; i++) {
        formData.append("files", productStore.currentFiles[i]);
      }
      try {
        const response = await axios.post(`${apiUrl}/api/upload-multiple`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        productStore.uploadedFiles = response.data.filenames;
      } catch (error) {
        console.error("Ошибка при загрузке файлов:", error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VFileInput, {
        multiple: "",
        modelValue: unref(productStore).currentFiles,
        "onUpdate:modelValue": ($event) => unref(productStore).currentFiles = $event,
        variant: "solo",
        label: "Загрузить файлы",
        accept: "image/*",
        "show-size": "",
        "prepend-icon": "mdi-camera",
        onChange: handleFileUpload
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/organism/Uploader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "SelectPhoto",
  __ssrInlineRender: true,
  setup(__props) {
    const productStore = useProductStore();
    const appStore = useAppStore();
    const getPhoto = () => {
      productStore.getUploadedFiles();
      appStore.modalData.content = [
        { type: "component", dir: "organism", component: "SelectableImgBlock" }
      ];
      appStore.isShowModal = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VBtn, {
        text: "Выбрать фото",
        type: "button",
        block: "",
        onClick: getPhoto
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/organism/SelectPhoto.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "Preview",
  __ssrInlineRender: true,
  setup(__props) {
    const productStore = useProductStore();
    const apiUrl = process.env.NODE_ENV === "production" ? "https://shop-back-mh7t.onrender.com" : "http://localhost:3001";
    let imgLocation = "";
    function removePreview(index2) {
      productStore.previews.splice(index2, 1);
      if (imgLocation == "upload") {
        productStore.currentFiles.splice(index2, 1);
        productStore.uploadedFiles.splice(index2, 1);
      } else if (imgLocation == "select") {
        productStore.selectedFiles.splice(index2, 1);
      }
    }
    watch(
      () => productStore.currentFiles,
      (newValue, oldValue) => {
        if (newValue) {
          imgLocation = "upload";
          productStore.previews.length = 0;
          for (let i = 0; i < productStore.currentFiles.length; i++) {
            const file = productStore.currentFiles[i];
            const reader = new FileReader();
            reader.onload = (e) => {
              productStore.previews.push(e.target.result);
            };
            reader.readAsDataURL(file);
          }
        }
      }
    );
    watch(
      () => productStore.selectedFiles,
      (newValue, oldValue) => {
        if (newValue) {
          imgLocation = "select";
          productStore.previews.length = 0;
          productStore.previews = productStore.selectedFiles.map(
            (elem) => apiUrl + "/" + elem
          );
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(productStore).previews.length) {
        _push(ssrRenderComponent(VRow, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(productStore).previews, (preview, index2) => {
                _push2(ssrRenderComponent(VCol, {
                  key: index2,
                  cols: "4",
                  class: "d-flex justify-center position-relative"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VImg, {
                        src: preview,
                        alt: `Превью ${index2 + 1}`,
                        "max-width": "100%",
                        "max-height": "150px",
                        contain: ""
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(VBtn, {
                        icon: "",
                        small: "",
                        class: "close-btn",
                        onClick: ($event) => removePreview(index2)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VIcon, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`mdi-close`);
                                } else {
                                  return [
                                    createTextVNode("mdi-close")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VIcon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-close")
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(VImg, {
                          src: preview,
                          alt: `Превью ${index2 + 1}`,
                          "max-width": "100%",
                          "max-height": "150px",
                          contain: ""
                        }, null, 8, ["src", "alt"]),
                        createVNode(VBtn, {
                          icon: "",
                          small: "",
                          class: "close-btn",
                          onClick: ($event) => removePreview(index2)
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-close")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(productStore).previews, (preview, index2) => {
                  return openBlock(), createBlock(VCol, {
                    key: index2,
                    cols: "4",
                    class: "d-flex justify-center position-relative"
                  }, {
                    default: withCtx(() => [
                      createVNode(VImg, {
                        src: preview,
                        alt: `Превью ${index2 + 1}`,
                        "max-width": "100%",
                        "max-height": "150px",
                        contain: ""
                      }, null, 8, ["src", "alt"]),
                      createVNode(VBtn, {
                        icon: "",
                        small: "",
                        class: "close-btn",
                        onClick: ($event) => removePreview(index2)
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-close")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/molecule/Preview.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1c52596c"]]);
const makeVRadioProps = propsFactory({
  ...makeVSelectionControlProps({
    falseIcon: "$radioOff",
    trueIcon: "$radioOn"
  })
}, "VRadio");
const VRadio = genericComponent()({
  name: "VRadio",
  props: makeVRadioProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(VSelectionControl, mergeProps(props, {
      "class": ["v-radio", props.class],
      "style": props.style,
      "type": "radio"
    }), slots));
    return {};
  }
});
const makeVRadioGroupProps = propsFactory({
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...makeVInputProps(),
  ...omit(makeSelectionControlGroupProps(), ["multiple"]),
  trueIcon: {
    type: IconValue,
    default: "$radioOn"
  },
  falseIcon: {
    type: IconValue,
    default: "$radioOff"
  },
  type: {
    type: String,
    default: "radio"
  }
}, "VRadioGroup");
const VRadioGroup = genericComponent()({
  name: "VRadioGroup",
  inheritAttrs: false,
  props: makeVRadioGroupProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const uid = getUid();
    const id = computed(() => props.id || `radio-group-${uid}`);
    const model = useProxiedModel(props, "modelValue");
    useRender(() => {
      const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
      const inputProps = VInput.filterProps(props);
      const controlProps = VSelectionControl.filterProps(props);
      const label = slots.label ? slots.label({
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      return createVNode(VInput, mergeProps({
        "class": ["v-radio-group", props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "id": id.value
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id: id2,
            messagesId,
            isDisabled,
            isReadonly
          } = _ref2;
          return createVNode(Fragment, null, [label && createVNode(VLabel, {
            "id": id2.value
          }, {
            default: () => [label]
          }), createVNode(VSelectionControlGroup, mergeProps(controlProps, {
            "id": id2.value,
            "aria-describedby": messagesId.value,
            "defaultsTarget": "VRadio",
            "trueIcon": props.trueIcon,
            "falseIcon": props.falseIcon,
            "type": props.type,
            "disabled": isDisabled.value,
            "readonly": isReadonly.value,
            "aria-labelledby": label ? id2.value : void 0,
            "multiple": false
          }, controlAttrs, {
            "modelValue": model.value,
            "onUpdate:modelValue": ($event) => model.value = $event
          }), slots)]);
        }
      });
    });
    return {};
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AddPhoto",
  __ssrInlineRender: true,
  setup(__props) {
    const productStore = useProductStore();
    const addPhoto = ref("choose");
    function clearStore() {
      productStore.uploadedFiles.length = 0;
      productStore.currentFiles.length = 0;
      productStore.selectedFiles.length = 0;
      productStore.previews.length = 0;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_organism_Uploader = __nuxt_component_0;
      const _component_organism_SelectPhoto = __nuxt_component_1;
      const _component_molecule_Preview = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (addPhoto.value == "download") {
        _push(ssrRenderComponent(_component_organism_Uploader, null, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_organism_SelectPhoto, null, null, _parent));
      }
      _push(`<div>`);
      _push(ssrRenderComponent(VContainer, { fluid: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRadioGroup, {
              modelValue: addPhoto.value,
              "onUpdate:modelValue": ($event) => addPhoto.value = $event,
              inline: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, { justify: "space-around" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRadio, {
                          label: "Загрузить фото",
                          value: "download",
                          onClick: clearStore
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRadio, {
                          label: "Выбрать фото",
                          value: "choose",
                          onClick: clearStore
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRadio, {
                            label: "Загрузить фото",
                            value: "download",
                            onClick: clearStore
                          }),
                          createVNode(VRadio, {
                            label: "Выбрать фото",
                            value: "choose",
                            onClick: clearStore
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, { justify: "space-around" }, {
                      default: withCtx(() => [
                        createVNode(VRadio, {
                          label: "Загрузить фото",
                          value: "download",
                          onClick: clearStore
                        }),
                        createVNode(VRadio, {
                          label: "Выбрать фото",
                          value: "choose",
                          onClick: clearStore
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRadioGroup, {
                modelValue: addPhoto.value,
                "onUpdate:modelValue": ($event) => addPhoto.value = $event,
                inline: ""
              }, {
                default: withCtx(() => [
                  createVNode(VRow, { justify: "space-around" }, {
                    default: withCtx(() => [
                      createVNode(VRadio, {
                        label: "Загрузить фото",
                        value: "download",
                        onClick: clearStore
                      }),
                      createVNode(VRadio, {
                        label: "Выбрать фото",
                        value: "choose",
                        onClick: clearStore
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_molecule_Preview, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/organism/AddPhoto.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;
    const characteristics = ref([...characteristicsSchemaKeys]);
    const productStore = useProductStore();
    ref(null);
    const extractCategories = (productMenu2) => {
      return productMenu2.map((item) => {
        return { title: item.name.ru, value: item.id };
      });
    };
    const extractSubcategories = (categoryID) => {
      const foundCategory = productMenu.find((item) => item.id === categoryID);
      if (foundCategory) {
        return foundCategory.items.map((item) => {
          return { title: item.name.ru, value: item.id };
        });
      }
      return [];
    };
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        productName(value) {
          if (!(value == null ? void 0 : value.length))
            return "Введите название";
          else if ((value == null ? void 0 : value.length) >= 2)
            return true;
          else
            return "Имя содержит минимум 2 символа";
        },
        productPrice(value) {
          if (value > 0)
            return true;
          return "Введите цену";
        },
        productQuantity(value) {
          if (value > 0)
            return true;
          return "Введите количество";
        },
        productCategory(value) {
          if (!value)
            return "Выберите категорию";
          else
            return true;
        },
        productSubcategory(value) {
          if (!value)
            return "Выберите подкатегорию";
          else
            return true;
        }
      }
    });
    const productName = useField("productName");
    const productOldPrice = useField("productOldPrice");
    const productPrice = useField("productPrice");
    const productQuantity = useField("productQuantity");
    const productCategory = useField("productCategory");
    const productSubcategory = useField("productSubcategory");
    const categories = extractCategories(productMenu);
    const subcategories = ref([]);
    const updateSubcategories = (category) => {
      subcategories.value = extractSubcategories(category);
      productSubcategory.value.value ? productSubcategory.value.value = "" : null;
    };
    const submit = handleSubmit(async (values) => {
      const objProduct = {
        name: values.productName,
        oldPrice: values.productOldPrice,
        price: values.productPrice,
        quantitiesInStore: values.productQuantity,
        category: values.productCategory,
        subcategory: values.productSubcategory,
        description: "",
        image: productStore.uploadedFiles.length ? productStore.uploadedFiles : productStore.selectedFiles,
        characteristics: currentCharacteristics.value
      };
      await productStore.postProduct(objProduct);
      handleReset();
      clearCharacteristicsValue();
      productStore.uploadedFiles.length = 0;
      productStore.currentFiles.length = 0;
      productStore.selectedFiles.length = 0;
      productStore.previews.length = 0;
    });
    const deleteProduct = (productId) => {
      productStore.deleteProduct(productId);
    };
    watch(productCategory.value, (newCategory) => {
      updateSubcategories(newCategory);
    });
    const currentCharacteristics = computed(() => {
      let objCharacteristics = {};
      characteristics.value.forEach((elem) => {
        if (elem.value) {
          objCharacteristics[elem.key] = elem.value;
        }
      });
      return objCharacteristics;
    });
    function clearCharacteristicsValue() {
      characteristics.value.forEach((elem) => {
        elem.value = "";
        elem.active = false;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_organism_AddPhoto = _sfc_main$1;
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VForm, { onSubmit: unref(submit) }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                variant: "solo",
                                modelValue: unref(productName).value.value,
                                "onUpdate:modelValue": ($event) => unref(productName).value.value = $event,
                                "error-messages": unref(productName).errorMessage.value,
                                label: "Product Name"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VSelect, {
                                label: "Category",
                                items: unref(categories),
                                "error-messages": unref(productCategory).errorMessage.value,
                                modelValue: unref(productCategory).value.value,
                                "onUpdate:modelValue": ($event) => unref(productCategory).value.value = $event,
                                variant: "solo",
                                onChange: updateSubcategories
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VSelect, {
                                label: "Subcategory",
                                items: subcategories.value,
                                "error-messages": unref(productSubcategory).errorMessage.value,
                                modelValue: unref(productSubcategory).value.value,
                                "onUpdate:modelValue": ($event) => unref(productSubcategory).value.value = $event,
                                variant: "solo",
                                disabled: !unref(productCategory).value.value
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                variant: "solo",
                                modelValue: unref(productOldPrice).value.value,
                                "onUpdate:modelValue": ($event) => unref(productOldPrice).value.value = $event,
                                "error-messages": unref(productOldPrice).errorMessage.value,
                                label: "Product Old Price",
                                type: "number",
                                min: unref(productPrice).value.value
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                variant: "solo",
                                modelValue: unref(productPrice).value.value,
                                "onUpdate:modelValue": ($event) => unref(productPrice).value.value = $event,
                                "error-messages": unref(productPrice).errorMessage.value,
                                label: "Product Price",
                                type: "number",
                                min: "0"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                variant: "solo",
                                modelValue: unref(productQuantity).value.value,
                                "onUpdate:modelValue": ($event) => unref(productQuantity).value.value = $event,
                                "error-messages": unref(productQuantity).errorMessage.value,
                                label: "Количество в наличии",
                                type: "number",
                                min: "0"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_organism_AddPhoto, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                class: "mt-2",
                                text: "Submit",
                                type: "submit",
                                block: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  variant: "solo",
                                  modelValue: unref(productName).value.value,
                                  "onUpdate:modelValue": ($event) => unref(productName).value.value = $event,
                                  "error-messages": unref(productName).errorMessage.value,
                                  label: "Product Name"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                                createVNode(VSelect, {
                                  label: "Category",
                                  items: unref(categories),
                                  "error-messages": unref(productCategory).errorMessage.value,
                                  modelValue: unref(productCategory).value.value,
                                  "onUpdate:modelValue": ($event) => unref(productCategory).value.value = $event,
                                  variant: "solo",
                                  onChange: updateSubcategories
                                }, null, 8, ["items", "error-messages", "modelValue", "onUpdate:modelValue"]),
                                createVNode(VSelect, {
                                  label: "Subcategory",
                                  items: subcategories.value,
                                  "error-messages": unref(productSubcategory).errorMessage.value,
                                  modelValue: unref(productSubcategory).value.value,
                                  "onUpdate:modelValue": ($event) => unref(productSubcategory).value.value = $event,
                                  variant: "solo",
                                  disabled: !unref(productCategory).value.value
                                }, null, 8, ["items", "error-messages", "modelValue", "onUpdate:modelValue", "disabled"]),
                                createVNode(VTextField, {
                                  variant: "solo",
                                  modelValue: unref(productOldPrice).value.value,
                                  "onUpdate:modelValue": ($event) => unref(productOldPrice).value.value = $event,
                                  "error-messages": unref(productOldPrice).errorMessage.value,
                                  label: "Product Old Price",
                                  type: "number",
                                  min: unref(productPrice).value.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "min"]),
                                createVNode(VTextField, {
                                  variant: "solo",
                                  modelValue: unref(productPrice).value.value,
                                  "onUpdate:modelValue": ($event) => unref(productPrice).value.value = $event,
                                  "error-messages": unref(productPrice).errorMessage.value,
                                  label: "Product Price",
                                  type: "number",
                                  min: "0"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                                createVNode(VTextField, {
                                  variant: "solo",
                                  modelValue: unref(productQuantity).value.value,
                                  "onUpdate:modelValue": ($event) => unref(productQuantity).value.value = $event,
                                  "error-messages": unref(productQuantity).errorMessage.value,
                                  label: "Количество в наличии",
                                  type: "number",
                                  min: "0"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                                createVNode(_component_organism_AddPhoto),
                                createVNode(VBtn, {
                                  class: "mt-2",
                                  text: "Submit",
                                  type: "submit",
                                  block: ""
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VForm, {
                            onSubmit: withModifiers(unref(submit), ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                variant: "solo",
                                modelValue: unref(productName).value.value,
                                "onUpdate:modelValue": ($event) => unref(productName).value.value = $event,
                                "error-messages": unref(productName).errorMessage.value,
                                label: "Product Name"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                              createVNode(VSelect, {
                                label: "Category",
                                items: unref(categories),
                                "error-messages": unref(productCategory).errorMessage.value,
                                modelValue: unref(productCategory).value.value,
                                "onUpdate:modelValue": ($event) => unref(productCategory).value.value = $event,
                                variant: "solo",
                                onChange: updateSubcategories
                              }, null, 8, ["items", "error-messages", "modelValue", "onUpdate:modelValue"]),
                              createVNode(VSelect, {
                                label: "Subcategory",
                                items: subcategories.value,
                                "error-messages": unref(productSubcategory).errorMessage.value,
                                modelValue: unref(productSubcategory).value.value,
                                "onUpdate:modelValue": ($event) => unref(productSubcategory).value.value = $event,
                                variant: "solo",
                                disabled: !unref(productCategory).value.value
                              }, null, 8, ["items", "error-messages", "modelValue", "onUpdate:modelValue", "disabled"]),
                              createVNode(VTextField, {
                                variant: "solo",
                                modelValue: unref(productOldPrice).value.value,
                                "onUpdate:modelValue": ($event) => unref(productOldPrice).value.value = $event,
                                "error-messages": unref(productOldPrice).errorMessage.value,
                                label: "Product Old Price",
                                type: "number",
                                min: unref(productPrice).value.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "min"]),
                              createVNode(VTextField, {
                                variant: "solo",
                                modelValue: unref(productPrice).value.value,
                                "onUpdate:modelValue": ($event) => unref(productPrice).value.value = $event,
                                "error-messages": unref(productPrice).errorMessage.value,
                                label: "Product Price",
                                type: "number",
                                min: "0"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                              createVNode(VTextField, {
                                variant: "solo",
                                modelValue: unref(productQuantity).value.value,
                                "onUpdate:modelValue": ($event) => unref(productQuantity).value.value = $event,
                                "error-messages": unref(productQuantity).errorMessage.value,
                                label: "Количество в наличии",
                                type: "number",
                                min: "0"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                              createVNode(_component_organism_AddPhoto),
                              createVNode(VBtn, {
                                class: "mt-2",
                                text: "Submit",
                                type: "submit",
                                block: ""
                              })
                            ]),
                            _: 1
                          }, 8, ["onSubmit"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6",
                    id: "scroll-target",
                    class: "overflow-y-auto",
                    style: { "max-height": "500px" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(characteristics.value, (ch) => {
                          _push4(ssrRenderComponent(VRow, {
                            class: "product__characteristic d-flex align-center",
                            key: ch.key
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span class="product__characteristic-title" data-v-1102c9df${_scopeId5}>${ssrInterpolate(ch.title)}</span>`);
                                    } else {
                                      return [
                                        createVNode("span", {
                                          class: "product__characteristic-title",
                                          onClick: ($event) => ch.active = !ch.active
                                        }, toDisplayString(ch.title), 9, ["onClick"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCol, {
                                  class: { "product__characteristic-input--active": ch.active },
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<input class="product__characteristic-input" type="text"${ssrIncludeBooleanAttr(!ch.active) ? " disabled" : ""} placeholder="Enter value"${ssrRenderAttr("value", ch.value)} data-v-1102c9df${_scopeId5}>`);
                                      if (ch.active) {
                                        _push6(ssrRenderComponent(VIcon, {
                                          onClick: ($event) => ch.active = false,
                                          class: "product__characteristic-close",
                                          icon: "mdi-close"
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                    } else {
                                      return [
                                        withDirectives(createVNode("input", {
                                          class: "product__characteristic-input",
                                          type: "text",
                                          disabled: !ch.active,
                                          placeholder: "Enter value",
                                          "onUpdate:modelValue": ($event) => ch.value = $event
                                        }, null, 8, ["disabled", "onUpdate:modelValue"]), [
                                          [vModelText, ch.value]
                                        ]),
                                        ch.active ? (openBlock(), createBlock(VIcon, {
                                          key: 0,
                                          onClick: ($event) => ch.active = false,
                                          class: "product__characteristic-close",
                                          icon: "mdi-close"
                                        }, null, 8, ["onClick"])) : createCommentVNode("", true)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", {
                                        class: "product__characteristic-title",
                                        onClick: ($event) => ch.active = !ch.active
                                      }, toDisplayString(ch.title), 9, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCol, {
                                    class: { "product__characteristic-input--active": ch.active },
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      withDirectives(createVNode("input", {
                                        class: "product__characteristic-input",
                                        type: "text",
                                        disabled: !ch.active,
                                        placeholder: "Enter value",
                                        "onUpdate:modelValue": ($event) => ch.value = $event
                                      }, null, 8, ["disabled", "onUpdate:modelValue"]), [
                                        [vModelText, ch.value]
                                      ]),
                                      ch.active ? (openBlock(), createBlock(VIcon, {
                                        key: 0,
                                        onClick: ($event) => ch.active = false,
                                        class: "product__characteristic-close",
                                        icon: "mdi-close"
                                      }, null, 8, ["onClick"])) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(characteristics.value, (ch) => {
                            return openBlock(), createBlock(VRow, {
                              class: "product__characteristic d-flex align-center",
                              key: ch.key
                            }, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", {
                                      class: "product__characteristic-title",
                                      onClick: ($event) => ch.active = !ch.active
                                    }, toDisplayString(ch.title), 9, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VCol, {
                                  class: { "product__characteristic-input--active": ch.active },
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    withDirectives(createVNode("input", {
                                      class: "product__characteristic-input",
                                      type: "text",
                                      disabled: !ch.active,
                                      placeholder: "Enter value",
                                      "onUpdate:modelValue": ($event) => ch.value = $event
                                    }, null, 8, ["disabled", "onUpdate:modelValue"]), [
                                      [vModelText, ch.value]
                                    ]),
                                    ch.active ? (openBlock(), createBlock(VIcon, {
                                      key: 0,
                                      onClick: ($event) => ch.active = false,
                                      class: "product__characteristic-close",
                                      icon: "mdi-close"
                                    }, null, 8, ["onClick"])) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1032, ["class"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VForm, {
                          onSubmit: withModifiers(unref(submit), ["prevent"])
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              variant: "solo",
                              modelValue: unref(productName).value.value,
                              "onUpdate:modelValue": ($event) => unref(productName).value.value = $event,
                              "error-messages": unref(productName).errorMessage.value,
                              label: "Product Name"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                            createVNode(VSelect, {
                              label: "Category",
                              items: unref(categories),
                              "error-messages": unref(productCategory).errorMessage.value,
                              modelValue: unref(productCategory).value.value,
                              "onUpdate:modelValue": ($event) => unref(productCategory).value.value = $event,
                              variant: "solo",
                              onChange: updateSubcategories
                            }, null, 8, ["items", "error-messages", "modelValue", "onUpdate:modelValue"]),
                            createVNode(VSelect, {
                              label: "Subcategory",
                              items: subcategories.value,
                              "error-messages": unref(productSubcategory).errorMessage.value,
                              modelValue: unref(productSubcategory).value.value,
                              "onUpdate:modelValue": ($event) => unref(productSubcategory).value.value = $event,
                              variant: "solo",
                              disabled: !unref(productCategory).value.value
                            }, null, 8, ["items", "error-messages", "modelValue", "onUpdate:modelValue", "disabled"]),
                            createVNode(VTextField, {
                              variant: "solo",
                              modelValue: unref(productOldPrice).value.value,
                              "onUpdate:modelValue": ($event) => unref(productOldPrice).value.value = $event,
                              "error-messages": unref(productOldPrice).errorMessage.value,
                              label: "Product Old Price",
                              type: "number",
                              min: unref(productPrice).value.value
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "min"]),
                            createVNode(VTextField, {
                              variant: "solo",
                              modelValue: unref(productPrice).value.value,
                              "onUpdate:modelValue": ($event) => unref(productPrice).value.value = $event,
                              "error-messages": unref(productPrice).errorMessage.value,
                              label: "Product Price",
                              type: "number",
                              min: "0"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                            createVNode(VTextField, {
                              variant: "solo",
                              modelValue: unref(productQuantity).value.value,
                              "onUpdate:modelValue": ($event) => unref(productQuantity).value.value = $event,
                              "error-messages": unref(productQuantity).errorMessage.value,
                              label: "Количество в наличии",
                              type: "number",
                              min: "0"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                            createVNode(_component_organism_AddPhoto),
                            createVNode(VBtn, {
                              class: "mt-2",
                              text: "Submit",
                              type: "submit",
                              block: ""
                            })
                          ]),
                          _: 1
                        }, 8, ["onSubmit"])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6",
                      id: "scroll-target",
                      class: "overflow-y-auto",
                      style: { "max-height": "500px" }
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(characteristics.value, (ch) => {
                          return openBlock(), createBlock(VRow, {
                            class: "product__characteristic d-flex align-center",
                            key: ch.key
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", {
                                    class: "product__characteristic-title",
                                    onClick: ($event) => ch.active = !ch.active
                                  }, toDisplayString(ch.title), 9, ["onClick"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCol, {
                                class: { "product__characteristic-input--active": ch.active },
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  withDirectives(createVNode("input", {
                                    class: "product__characteristic-input",
                                    type: "text",
                                    disabled: !ch.active,
                                    placeholder: "Enter value",
                                    "onUpdate:modelValue": ($event) => ch.value = $event
                                  }, null, 8, ["disabled", "onUpdate:modelValue"]), [
                                    [vModelText, ch.value]
                                  ]),
                                  ch.active ? (openBlock(), createBlock(VIcon, {
                                    key: 0,
                                    onClick: ($event) => ch.active = false,
                                    class: "product__characteristic-close",
                                    icon: "mdi-close"
                                  }, null, 8, ["onClick"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1032, ["class"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(productStore).products, (product) => {
                    _push3(ssrRenderComponent(VCol, {
                      key: product._id,
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCard, { class: "product-card" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VImg, {
                                  src: product.image[0] ? `${unref(apiUrl)}/` + product.image[0] : ""
                                }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCardTitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(product.name)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(product.name), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<p data-v-1102c9df${_scopeId4}><b data-v-1102c9df${_scopeId4}>Price:</b> $${ssrInterpolate(product.price)}</p><p data-v-1102c9df${_scopeId4}><b data-v-1102c9df${_scopeId4}>Category:</b> ${ssrInterpolate(product.category)}</p><p data-v-1102c9df${_scopeId4}><b data-v-1102c9df${_scopeId4}>Subcategory:</b> ${ssrInterpolate(product.subcategory)}</p>`);
                                _push5(ssrRenderComponent(VBtn, {
                                  color: "error",
                                  onClick: ($event) => deleteProduct(product._id)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Delete`);
                                    } else {
                                      return [
                                        createTextVNode("Delete")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VImg, {
                                    src: product.image[0] ? `${unref(apiUrl)}/` + product.image[0] : ""
                                  }, null, 8, ["src"]),
                                  createVNode(VCardTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(product.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("p", null, [
                                    createVNode("b", null, "Price:"),
                                    createTextVNode(" $" + toDisplayString(product.price), 1)
                                  ]),
                                  createVNode("p", null, [
                                    createVNode("b", null, "Category:"),
                                    createTextVNode(" " + toDisplayString(product.category), 1)
                                  ]),
                                  createVNode("p", null, [
                                    createVNode("b", null, "Subcategory:"),
                                    createTextVNode(" " + toDisplayString(product.subcategory), 1)
                                  ]),
                                  createVNode(VBtn, {
                                    color: "error",
                                    onClick: ($event) => deleteProduct(product._id)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Delete")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCard, { class: "product-card" }, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  src: product.image[0] ? `${unref(apiUrl)}/` + product.image[0] : ""
                                }, null, 8, ["src"]),
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(product.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("p", null, [
                                  createVNode("b", null, "Price:"),
                                  createTextVNode(" $" + toDisplayString(product.price), 1)
                                ]),
                                createVNode("p", null, [
                                  createVNode("b", null, "Category:"),
                                  createTextVNode(" " + toDisplayString(product.category), 1)
                                ]),
                                createVNode("p", null, [
                                  createVNode("b", null, "Subcategory:"),
                                  createTextVNode(" " + toDisplayString(product.subcategory), 1)
                                ]),
                                createVNode(VBtn, {
                                  color: "error",
                                  onClick: ($event) => deleteProduct(product._id)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Delete")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(productStore).products, (product) => {
                      return openBlock(), createBlock(VCol, {
                        key: product._id,
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, { class: "product-card" }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                src: product.image[0] ? `${unref(apiUrl)}/` + product.image[0] : ""
                              }, null, 8, ["src"]),
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(product.name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("p", null, [
                                createVNode("b", null, "Price:"),
                                createTextVNode(" $" + toDisplayString(product.price), 1)
                              ]),
                              createVNode("p", null, [
                                createVNode("b", null, "Category:"),
                                createTextVNode(" " + toDisplayString(product.category), 1)
                              ]),
                              createVNode("p", null, [
                                createVNode("b", null, "Subcategory:"),
                                createTextVNode(" " + toDisplayString(product.subcategory), 1)
                              ]),
                              createVNode(VBtn, {
                                color: "error",
                                onClick: ($event) => deleteProduct(product._id)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Delete")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VForm, {
                        onSubmit: withModifiers(unref(submit), ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            variant: "solo",
                            modelValue: unref(productName).value.value,
                            "onUpdate:modelValue": ($event) => unref(productName).value.value = $event,
                            "error-messages": unref(productName).errorMessage.value,
                            label: "Product Name"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                          createVNode(VSelect, {
                            label: "Category",
                            items: unref(categories),
                            "error-messages": unref(productCategory).errorMessage.value,
                            modelValue: unref(productCategory).value.value,
                            "onUpdate:modelValue": ($event) => unref(productCategory).value.value = $event,
                            variant: "solo",
                            onChange: updateSubcategories
                          }, null, 8, ["items", "error-messages", "modelValue", "onUpdate:modelValue"]),
                          createVNode(VSelect, {
                            label: "Subcategory",
                            items: subcategories.value,
                            "error-messages": unref(productSubcategory).errorMessage.value,
                            modelValue: unref(productSubcategory).value.value,
                            "onUpdate:modelValue": ($event) => unref(productSubcategory).value.value = $event,
                            variant: "solo",
                            disabled: !unref(productCategory).value.value
                          }, null, 8, ["items", "error-messages", "modelValue", "onUpdate:modelValue", "disabled"]),
                          createVNode(VTextField, {
                            variant: "solo",
                            modelValue: unref(productOldPrice).value.value,
                            "onUpdate:modelValue": ($event) => unref(productOldPrice).value.value = $event,
                            "error-messages": unref(productOldPrice).errorMessage.value,
                            label: "Product Old Price",
                            type: "number",
                            min: unref(productPrice).value.value
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "min"]),
                          createVNode(VTextField, {
                            variant: "solo",
                            modelValue: unref(productPrice).value.value,
                            "onUpdate:modelValue": ($event) => unref(productPrice).value.value = $event,
                            "error-messages": unref(productPrice).errorMessage.value,
                            label: "Product Price",
                            type: "number",
                            min: "0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                          createVNode(VTextField, {
                            variant: "solo",
                            modelValue: unref(productQuantity).value.value,
                            "onUpdate:modelValue": ($event) => unref(productQuantity).value.value = $event,
                            "error-messages": unref(productQuantity).errorMessage.value,
                            label: "Количество в наличии",
                            type: "number",
                            min: "0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                          createVNode(_component_organism_AddPhoto),
                          createVNode(VBtn, {
                            class: "mt-2",
                            text: "Submit",
                            type: "submit",
                            block: ""
                          })
                        ]),
                        _: 1
                      }, 8, ["onSubmit"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6",
                    id: "scroll-target",
                    class: "overflow-y-auto",
                    style: { "max-height": "500px" }
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(characteristics.value, (ch) => {
                        return openBlock(), createBlock(VRow, {
                          class: "product__characteristic d-flex align-center",
                          key: ch.key
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", {
                                  class: "product__characteristic-title",
                                  onClick: ($event) => ch.active = !ch.active
                                }, toDisplayString(ch.title), 9, ["onClick"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCol, {
                              class: { "product__characteristic-input--active": ch.active },
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                withDirectives(createVNode("input", {
                                  class: "product__characteristic-input",
                                  type: "text",
                                  disabled: !ch.active,
                                  placeholder: "Enter value",
                                  "onUpdate:modelValue": ($event) => ch.value = $event
                                }, null, 8, ["disabled", "onUpdate:modelValue"]), [
                                  [vModelText, ch.value]
                                ]),
                                ch.active ? (openBlock(), createBlock(VIcon, {
                                  key: 0,
                                  onClick: ($event) => ch.active = false,
                                  class: "product__characteristic-close",
                                  icon: "mdi-close"
                                }, null, 8, ["onClick"])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(productStore).products, (product) => {
                    return openBlock(), createBlock(VCol, {
                      key: product._id,
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, { class: "product-card" }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              src: product.image[0] ? `${unref(apiUrl)}/` + product.image[0] : ""
                            }, null, 8, ["src"]),
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(product.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("p", null, [
                              createVNode("b", null, "Price:"),
                              createTextVNode(" $" + toDisplayString(product.price), 1)
                            ]),
                            createVNode("p", null, [
                              createVNode("b", null, "Category:"),
                              createTextVNode(" " + toDisplayString(product.category), 1)
                            ]),
                            createVNode("p", null, [
                              createVNode("b", null, "Subcategory:"),
                              createTextVNode(" " + toDisplayString(product.subcategory), 1)
                            ]),
                            createVNode(VBtn, {
                              color: "error",
                              onClick: ($event) => deleteProduct(product._id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Delete")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1102c9df"]]);
export {
  index as default
};
//# sourceMappingURL=index-BHXXqqVM.js.map
