export enum TokenType {
  IS = "IS",
  NOT = "NOT",
  BETWEEN = "BETWEEN",
  LIKE = "LIKE",
  ILIKE = "ILIKE",
  IS_NOT = "IS_NOT",
  NOT_BETWEEN = "NOT_BETWEEN",
  NOT_LIKE = "NOT_LIKE",
  NOT_ILIKE = "NOT_ILIKE",
  CONCAT = "CONCAT",
  MODULO = "MODULO",

  SELECT = "SELECT",
  FROM = "FROM",
  WHERE = "WHERE",
  ORDER = "ORDER",

  BY = "BY",
  DESC = "DESC",
  ASC = "ASC",
  GROUP = "GROUP",

  GROUP_CONCAT = "GROUP_CONCAT",
  SUM = "SUM",
  COUNT = "COUNT",
  MAX = "MAX",
  MIN = "MIN",
  AVG = "AVG",

  LEFT_PAREN = "LEFT_PAREN",
  RIGHT_PAREN = "RIGHT_PAREN",
  LEFT_BRACE = "LEFT_BRACE",
  RIGHT_BRACE = "RIGHT_BRACE",
  COMMA = "COMMA",
  DOT = "DOT",
  MINUS = "MINUS",
  PLUS = "PLUS",
  SEMICOLON = "SEMICOLON",
  SLASH = "SLASH",
  STAR = "STAR",
  // One or two character tokens.
  BANG = "BANG",
  BANG_EQUAL = "BANG_EQUAL",
  EQUAL = "EQUAL",
  GREATER = "GREATER",
  GREATER_EQUAL = "GREATER_EQUAL",
  LESS = "LESS",
  LESS_EQUAL = "LESS_EQUAL",
  // Literals.
  IDENTIFIER = "IDENTIFIER",
  STRING = "STRING",
  NUMBER = "NUMBER",
  // Keywords.
  AND = "AND",
  OR = "OR",

  FALSE = "FALSE",
  TRUE = "TRUE",
  NULL = "NULL",

  EOF = "EOF",

  ALL = "ALL",
  DISTINCT = "DISTINCT",

  BLOB = "BLOB",
  BOOL = "BOOL",
  BOOLEAN = "BOOLEAN",
  CHECK = "CHECK",
  CREATE = "CREATE",
  DATE = "DATE",
  DEFAULT = "DEFAULT",
  INT = "INT",

  JOIN = "JOIN",
  INNER = "INNER",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  OUTER = "OUTER",
  CROSS = "CROSS",

  LIMIT = "LIMIT",
  OFFSET = "OFFSET",
  ON = "ON",

  HAVING = "HAVING",
  UNIQUE = "UNIQUE",

  TEMP = "TEMP",

  KEY = "KEY",

  PRIMARY = "PRIMARY",

  AS = "AS",

  TABLE = "TABLE",
  VIEW = "VIEW",
  REAL = "REAL",
  TEXT = "TEXT",
  TEMPORARY = "TEMPORARY",
  UPDATE = "UPDATE",
  SET = "SET",
  EXISTS = "EXISTS",
  IN = "IN",
  SIMILAR = "SIMILAR",

  INTEGER = "INTEGER",
}
