
export enum TestBedOverrideType {
  COMPONENT,
  PROVIDER
}

export class TestBedOverride<T> {
  public type: TestBedOverrideType | undefined;

  public constructor(public data: T) {}
}
