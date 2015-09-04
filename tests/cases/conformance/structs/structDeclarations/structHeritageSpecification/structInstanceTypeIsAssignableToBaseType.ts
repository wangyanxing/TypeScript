// doc 1.1
// Because struct uses nominal typing, the instance type of the declared struct doesn’t need to be
// assignable to the base type reference. However, member variables override is not allowed.

struct C {
	foo: string;
	thing(): string {
		return "1";
	}
}

struct D extends C {
	foo: number; // error
	thing(): number {
		return 1;  // ok
	}
}