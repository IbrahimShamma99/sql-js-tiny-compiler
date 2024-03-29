import { Variant } from '../variant'
import { Visitor } from '../visitors/visitor'

export abstract class Statement {
  public type = 'statement'
  public variant: Variant = 'select'

  public abstract accept<R>(visitor: Visitor<R>): R
  public abstract toLiteral(): string
}
