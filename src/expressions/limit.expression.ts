import { Visitor } from '../visitors/visitor'
import { Expression } from './expression'
import { Variant } from '../variant'

export class LimitExpression extends Expression {
  public override variant: Variant = 'limit'
  public offset?: Expression
  constructor(public expression: Expression) {
    super()
  }

  public override accept<R>(visitor: Visitor<R>, context: any): R {
    return visitor.visitLimitExpr(this, context)
  }

  public override toLiteral<R>(): string {
    throw new Error('Method not implemented.')
  }
}
