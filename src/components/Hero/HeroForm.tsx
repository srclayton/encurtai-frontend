import UrlServices from "../../services/UrlServices";
type THeroFormProps = {
  loadingHandler: (loading: boolean) => void;
  shortenedUrlHandler: (shortenedUrl: string | null) => void;
  modalIsOpenHandler: (modalIsOpen: boolean) => void;
};

function HeroForm(props: THeroFormProps) {
  const { loadingHandler, shortenedUrlHandler, modalIsOpenHandler } = props;
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    loadingHandler(true);
    modalIsOpenHandler(true);
    setTimeout(async () => {
      const urlInput = document.getElementById("urlInput") as HTMLInputElement;
      const url = urlInput.value;
      const response = await UrlServices.shortenUrl(url);
      // eslint-disable-next-line
      // @ts-ignore

      shortenedUrlHandler(response.shortUrl);
      loadingHandler(false);
    }, 2000);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="row input__data">
        <div className="ten columns">
          Digite a URL que deseja encurtar:
          <input
            className="u-full-width input__url"
            type="url"
            id="urlInput"
            placeholder="https://example.com/minha-url-longa"
            required
          />
        </div>
        <div className="two columns">
          <br />
          <button className="button u-full-width" type="submit">
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
}

export default HeroForm;
