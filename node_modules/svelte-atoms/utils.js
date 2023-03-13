import { bubble, listen } from "svelte/internal";
import icons from "./icons";

export function getEventsAction(component) {
  return (node) => {
    const events = Object.keys(component.$$.callbacks);
    const listeners = [];

    events.forEach((event) =>
      listeners.push(listen(node, event, (e) => bubble(component, e)))
    );

    return {
      destroy: () => {
        listeners.forEach((listener) => listener());
      },
    };
  };
}


export function getSVGIconObjet(input) {
  const iconObject = { viewbox: 16, pathes:[] }

  let raw = (icons[input]) ? icons[input] : input;

  if(typeof raw === 'string' && raw.startsWith("M")) return (iconObject.pathes.push({path:raw}),iconObject);

  if (Array.isArray(raw)) iconObject.pathes = raw;
  if( typeof raw === 'object'){
    if(raw.viewbox) iconObject.viewbox = raw.viewbox;
    if(raw.pathes) iconObject.pathes = Array.isArray(raw.pathes) ? raw.pathes : [raw.pathes];
  }

  iconObject.pathes = iconObject.pathes.map(p => {
    if(typeof p === 'string' && p.startsWith("M")) return {path:p};
    if(typeof p === 'object' && p.path) return p;
    return {};
  }).filter(p=>!!p.path);

  return iconObject;
}
