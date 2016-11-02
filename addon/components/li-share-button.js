import ShareButton from '../components/share-button';

export default ShareButton.extend({
  shareURL: 'https://www.linkedin.com/shareArticle',
  url: "",
  click() {
    let url = this.get('shareURL');
    url += '?mini=true';
    url += '&url=' + encodeURIComponent(this.get('url'));

    this.openSharePopup(url);
  }
});
