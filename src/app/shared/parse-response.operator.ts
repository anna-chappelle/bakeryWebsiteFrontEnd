import { map, pipe } from 'rxjs';
import { GenericSchema, safeParse } from 'valibot';

/**
 * Custom rxjs operator that parses an incoming response with a given schema.
 * Maps response to the schema's type if parsing succeeds
 * Throws if response is not of the expected shape.
 * @param schema The schema to validate the response against.
 */
export function parseResponse<T extends GenericSchema>(schema: T) {
  const stack = new Error().stack!.split('\n').slice(0, 4);
  return pipe(
    map((valueToParse) => {
      const result = safeParse(schema, valueToParse);

      if (result.success) {
        return result.output;
      }

      console.error(result.issues);
      console.error(stack);
      throw new Error('Object failed to parse, callstack and issues logged');
    }),
  );
}
