@RestController
@RequestMapping("/api/products")
public class ProductController {
  
  private List<Product> products = new ArrayList<>();
  
  @GetMapping
  public List<Product> getAllProducts() {
    return products;
  }
  
  @PostMapping
  public ResponseEntity<Product> addProduct(@RequestBody Product product) {
    products.add(product);
    return ResponseEntity.ok(product);
  }
  
  @GetMapping("/{id}")
  public ResponseEntity<Product> getProductById(@PathVariable String id) {
    Optional<Product> foundProduct = products.stream()
        .filter(product -> product.getId().equals(id))
        .findFirst();
    
    if (foundProduct.isPresent()) {
      return ResponseEntity.ok(foundProduct.get());
    } else {
      return ResponseEntity.notFound().build();
    }
  }
  
  @PutMapping("/{id}")
  public ResponseEntity<Product> updateProduct(@PathVariable String id, @RequestBody Product updatedProduct) {
    Optional<Product> foundProduct = products.stream()
        .filter(product -> product.getId().equals(id))
        .findFirst();
    
    if (foundProduct.isPresent()) {
      Product product = foundProduct.get();
      product.setName(updatedProduct.getName());
      product.setPrice(updatedProduct.getPrice());
      return ResponseEntity.ok(product);
    } else {
      return ResponseEntity.notFound().build();
    }
  }
  
  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteProduct(@PathVariable String id) {
    boolean removed = products.removeIf(product -> product.getId().equals(id));
    
    if (removed) {
      return ResponseEntity.noContent().build();
    } else {
      return ResponseEntity.notFound().build();
    }
  }
  
}
