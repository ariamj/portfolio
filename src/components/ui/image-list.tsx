interface MasonryImageListProps {
  images: { src: string; alt: string }[];
}

export function MasonryImageList({ images }: MasonryImageListProps) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4 [column-fill:_balance]">
      {images.map((img, i) => (
        <div key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-xl bg-slate-800">
          <img
            src={img.src}
            alt={img.alt}
            className="h-auto w-full object-cover transition-opacity duration-300 hover:opacity-90"
          />
        </div>
      ))}
    </div>
  );
}