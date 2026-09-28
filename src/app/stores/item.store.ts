import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { BackendService } from '@services/backend.service';
import { pipe, switchMap, tap } from 'rxjs';
import { Item } from '@models/item.model';

type ItemStoreState = {
  items: Item[];
  isLoading: boolean;
};

const initialState: ItemStoreState = {
  items: [],
  isLoading: false,
};

export const ItemStore = signalStore(
  withState(initialState),
  withMethods((store, backendService = inject(BackendService)) => ({
    loadItems: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() => {
          return backendService.getBakedGoods().pipe(
            tapResponse({
              next: ({ items }) =>
                patchState(store, { items, isLoading: false }),
              error: (err) => {
                patchState(store, { isLoading: false });
                console.error(err);
              },
            }),
          );
        }),
      ),
    ),
  })),
);
