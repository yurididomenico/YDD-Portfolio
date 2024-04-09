export class Project {
  constructor(
    public name: string,
    public videoPath: string,
    public description: string
  ) {
    this.name = name;
    this.videoPath = videoPath;
    this.description = description;
  }
}
