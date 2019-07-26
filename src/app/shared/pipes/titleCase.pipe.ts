import { Pipe, PipeTransform } from '@angular/core';
/*
 * Transforms a string to title case
 * Takes a separator argument that defaults to a space.
 * Example:
 *   {{ hello_you | titleCase:'_'}}
 *   formats to: Hello You
 */
@Pipe({ name: 'titleCase' })
export class TitleCasePipe implements PipeTransform {
  transform(str: string, separator = ' '): string {
    return str
      .toLowerCase()
      .split(separator)
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
  }
}
