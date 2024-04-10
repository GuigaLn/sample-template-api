export abstract class IService<inputs, output> {
  abstract execute(inputs: inputs): Promise<output>;
}
