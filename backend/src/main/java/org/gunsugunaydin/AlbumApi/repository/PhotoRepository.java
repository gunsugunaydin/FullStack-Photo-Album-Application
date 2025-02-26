package org.gunsugunaydin.AlbumApi.repository;

import org.gunsugunaydin.AlbumApi.model.Photo;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PhotoRepository extends JpaRepository<Photo,Long> {
    
    List<Photo> findByAlbum_id(Long id);
}
