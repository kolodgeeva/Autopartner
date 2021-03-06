package autopartner.service;

import autopartner.domain.entity.Material;

public interface MaterialService {

    Iterable<Material> getByActiveTrue();

    Material getMaterialById(Long id);

    Material saveMaterial(Material material);

}
