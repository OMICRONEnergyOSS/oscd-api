import { EditV2 } from './editv2.js';

export type EditDetailV2<E extends EditV2 = EditV2> = {
  edit: E;
  title?: string;
  squash?: boolean;
};

export type EditEventV2<E extends EditV2 = EditV2> = CustomEvent<
  EditDetailV2<E>
>;

export type EditEventOptions = {
  title?: string;
  squash?: boolean;
};

export function newEditEventV2<E extends EditV2>(
  edit: E,
  options?: EditEventOptions,
): EditEventV2<E> {
  return new CustomEvent<EditDetailV2<E>>('oscd-edit-v2', {
    composed: true,
    bubbles: true,
    detail: { ...options, edit },
  });
}

declare global {
  interface ElementEventMap {
    ['oscd-edit-v2']: EditEventV2<EditV2>;
  }
}
