import ShareButton from '../components/share-button';

export default ShareButton.extend({
  shareURL: 'https://plus.google.com/share',
  url: "",
  click() {
    let url = this.get('shareURL');
    url += '?url=' + encodeURIComponent(this.get('url'));

    this.openSharePopup(url);
  }
});
