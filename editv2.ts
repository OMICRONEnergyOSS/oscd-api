/** Intent to `parent.insertBefore(node, reference)` */
export type Insert = {
  parent: Node;
  node: Node;
  reference: Node | null;
};

/** Intent to remove a `node` from its `ownerDocument` */
export type Remove = {
  node: Node;
};

/** Intent to set the `textContent` of `element` */
export type SetTextContent = {
  element: Element;
  textContent: string;
};

/** Intent to set or remove (if `null`) `attributes`(-`NS`) on `element` */
export type SetAttributes = {
  element: Element;
  attributes: Partial<Record<string, string | null>>;
  attributesNS: Partial<Record<string, Partial<Record<string, string | null>>>>;
};

/** Intent to change some XMLDocuments */
export type EditV2 =
  | Insert
  | SetAttributes
  | SetTextContent
  | Remove
  | EditV2[];

export function isComplex(edit: EditV2): edit is EditV2[] {
  return edit instanceof Array;
}

export function isSetTextContent(edit: EditV2): edit is SetTextContent {
  return (
    (edit as SetTextContent).element !== undefined &&
    (edit as SetTextContent).textContent !== undefined
  );
}

export function isRemove(edit: EditV2): edit is Remove {
  return (
    (edit as Insert).parent === undefined && (edit as Remove).node !== undefined
  );
}

export function isSetAttributes(edit: EditV2): edit is SetAttributes {
  return (
    (edit as SetAttributes).element !== undefined &&
    (edit as SetAttributes).attributes !== undefined &&
    (edit as SetAttributes).attributesNS !== undefined
  );
}

export function isInsert(edit: EditV2): edit is Insert {
  return (
    (edit as Insert).parent !== undefined &&
    (edit as Insert).node !== undefined &&
    (edit as Insert).reference !== undefined
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isEditV2(edit: any): edit is EditV2 {
  if (isComplex(edit)) return !edit.some(e => !isEditV2(e));

  return (
    isSetAttributes(edit) ||
    isSetTextContent(edit) ||
    isInsert(edit) ||
    isRemove(edit)
  );
}
