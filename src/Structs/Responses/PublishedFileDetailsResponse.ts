import PublishedFileDetails from '../PublishedFileDetails';
export default interface PublishedFileDetailsResponse {
  response: {
    result: number;
    resultcount: number;
    publishedfiledetails: PublishedFileDetails[]
  };
}
