import ImageDropzone from '@/common/components/image-dropzone';

export default function ModelPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 gap-8">
      <h1 className="text-5xl">
        Upload a<span className="text-warning"> photo</span>
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl text-center">
        Upload a photo to check if it is a deepfake. Supported formats: JPEG, JPG. Any size image will be resized automatically.
      </p>
      <ImageDropzone />
    </main>
  );
}
