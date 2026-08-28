import { MasonryImageList } from "./ui/image-list";

export function Artfolio() {
    const artGalleryImages = [
        "Auroras_dig.png",
        "Bulbasaur_dig.png",
        "bedroom_marker.jpeg",
        "bike_mix.jpeg",
        "birds_wc.jpeg",
        "car_interior_char.jpeg",
        "eye_char.jpeg",
        "fashion_green_dress_dig.jpeg",
        "forest_wc.jpeg",
        "gate_charcoal.jpeg",
        "grendel_char.jpeg",
        "house_sketch.jpeg",
        "instagram.jpeg",
        "mansion_int_deg.jpeg",
        "mansion_landscape_int_deg.jpeg",
        "marie_antoniette.jpeg",
        "metropolis_ball_char.jpeg",
        "portrait_dig.jpeg",
        "red_flower_wc.jpeg",
        "river_wc.jpeg",
        "rose_cs.jpeg",
        "roses_wc.jpeg",
        "shell_wc.jpeg",
        "small_flowers_wc.jpeg",
        "tower_marker.jpeg",
        "xmas_card.jpeg"
    ];
    
    return (
        <div>
            <MasonryImageList
                images={artGalleryImages.map((img) => ({
                    src: `/images/art_gallery/${img}`,
                    alt: img.split(".")[0].replace(/_/g, " ")
                }))}
            />
        </div>
    )
}