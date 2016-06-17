
import * as _ from "lodash";

export class Service {

    constructor(private a: number) {}

    public getit(): string {

        let v = _.find(["a", "b"], (e) => {
            return e === "b";
        });

        return this.a + "--" + v;

    }

}

