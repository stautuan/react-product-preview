function MainContent() {
  return (
    <main className='main'>
      <article className='product-card'>
        <figure className='product-img'>
          <picture>
            <source
              srcSet='assets/images/image-product-desktop.jpg'
              media='(min-width: 650px)'
            />
            <img
              className='img'
              src='assets/images/image-product-mobile.jpg'
              alt='A bottle of Chanel perfume'
            />
          </picture>
        </figure>
        <section className='product-summary'>
          <span className='product-category'>Perfume</span>
          <h1 className='product-title'>Gabrielle Essence Eau De Parfum</h1>
          <p className='product-description'>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className='product-price'>
            <p className='product-price--sale'>$149.99</p>
            <p className='product-price--original'>$169.99</p>
          </div>
          <button className='btn'>
            <img
              src='assets/images/icon-cart.svg'
              alt='icon cart'
              aria-hidden='true'
            />
            <span>Add to Cart</span>
          </button>
        </section>
      </article>
    </main>
  );
}

export default MainContent;
