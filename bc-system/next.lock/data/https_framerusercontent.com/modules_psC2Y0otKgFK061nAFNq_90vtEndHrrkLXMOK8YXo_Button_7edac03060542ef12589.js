import{jsx as _jsx}from"react/jsx-runtime";import{createStore}from"https://framer.com/m/framer/store.js@^1.0.0";import{randomColor}from"https://framer.com/m/framer/utils.js@^0.9.0";// Learn more: https://www.framer.com/docs/guides/overrides/
const useStore=createStore({background:"#0099FF"});export function withRotate(Component){return props=>{return /*#__PURE__*/ _jsx(Component,{...props,animate:{rotate:90},transition:{duration:2}});};}export function withHover(Component){return props=>{return /*#__PURE__*/ _jsx(Component,{...props,whileHover:{opacity:.8}});};}export function withRandomColor(Component){return props=>{const[store,setStore]=useStore();return /*#__PURE__*/ _jsx(Component,{...props,animate:{background:store.background},onClick:()=>{setStore({background:randomColor()});}});};}
export const __FramerMetadata__ = {"exports":{"withRandomColor":{"type":"reactHoc","name":"withRandomColor","annotations":{"framerContractVersion":"1"}},"withHover":{"type":"reactHoc","name":"withHover","annotations":{"framerContractVersion":"1"}},"withRotate":{"type":"reactHoc","name":"withRotate","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./Button.map