import scrapy 
from scrapy_splash import SplashRequest

class Hym_spider(scrapy.Spider):
    name = 'hymspider'
    start_urls = ['https://www2.hm.com/es_es/hombre/compra-por-producto/sudaderas.html',
                  'https://www2.hm.com/es_es/hombre/compra-por-producto/cardigans-jerseis.html',
                  'https://www2.hm.com/es_es/hombre/compra-por-producto/camisas.html',
                  'https://www2.hm.com/es_es/hombre/compra-por-producto/camisetas-de-manga-corta-y-sin-mangas.html',
                  'https://www2.hm.com/es_es/hombre/compra-por-producto/americanas-y-trajes.html',
                  'https://www2.hm.com/es_es/hombre/compra-por-producto/chaquetas-y-abrigos.html',
                  'https://www2.hm.com/es_es/hombre/compra-por-producto/vaqueros.html',
                  'https://www2.hm.com/es_es/hombre/compra-por-producto/pantalones-y-chinos.html',
                  'https://www2.hm.com/es_es/hombre/compra-por-producto/pantalones-cortos.html',
                  'https://www2.hm.com/es_es/hombre/compra-por-producto/moda-de-bano.html',
                  'https://www2.hm.com/es_es/hombre/compra-por-producto/ropa-dormir.html',
                  'https://www2.hm.com/es_es/hombre/compra-por-producto/ropa-interior.html',
                  'https://www2.hm.com/es_es/hombre/compra-por-producto/calcetines.html',
                  'https://www2.hm.com/es_es/hombre/compra-por-producto/accesorios.html',
                  'https://www2.hm.com/es_es/hombre/compra-por-producto/calzado.html']

    def parse(self, response):
        url = response.url + '?page-size=' + response.css('h2.load-more-heading').attrib['data-total']
        yield SplashRequest(url, callback=self.general_parse, args={'wait': 20})
    
    def general_parse(self, response):
        for product in response.css("article.hm-product-item"):
            name = product.css("a.link::text").get()
            price = product.css("span.price.regular::text").get()
            product_link = response.urljoin(product.css("a.link::attr(href)").get())
            tipe = response.url
            yield SplashRequest(product_link, callback=self.parse_product_page, meta={'name': name, 'price': price, 'link': product_link, 'type': tipe}, args={'wait': 20, 'product_link': product_link})
    
    def parse_product_page(self, response):
        
        
        imagenMain_div = response.css('div.product-detail-main-image-container')
        imagenMain_src = imagenMain_div.css('img::attr(src)').get()
        imagenMain = ('https://' + imagen1_src)

        imagen1_div = response.css('div.product-detail-main-image-container') #en las secundarias teien que ser distinto
        imagen1_src = imagen1_div.css('img::attr(src)').get()
        imagen1 = ('https://' + imagen1_src)

        product_details = {
            'name': response.meta['name'],
            'price': response.meta['price'],
            'link' : response.meta['link'],
            'tipe' : response.meta['tipe'],
            'imagen1' : imagenMain,
        }
        
        yield product_details





















            image1 = 
            yield {
                'name': product.css("a.link::text").get(),
                'price': product.css("span.price.regular::text").get(),
                'link': response.urljoin(product.css("a.link::attr(href)").get()),
                'type': response.url,
            }

    def images_parse(self, response)

    






