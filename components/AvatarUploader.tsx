import { PhotoIcon } from '@heroicons/react/24/outline';
import { Dropzone } from '@mantine/dropzone';
import Image from 'next/image';
import { useState } from 'react';

const AvatarUploader = ({ setPhoto }) => {
  const [avatarPhoto, setAvatarPhoto] = useState('');

  return (
    <section className='space-y-5'>
      {avatarPhoto && (
        <div className='w-28 h-28 mx-auto select-none cursor-not-allowed rounded-full border-2 border-white'>
          <Image
            src={avatarPhoto}
            alt='profile photo'
            width={200}
            height={200}
            objectFit='cover'
            className='rounded-full'
          />
        </div>
      )}
      <Dropzone
        onDrop={(file) => {
          const previewPhoto = URL.createObjectURL(file[0]);
          setPhoto(file[0]);
          setAvatarPhoto(previewPhoto);
        }}
        onReject={(file) => console.log('rejected files', file[0])}
        className='bg-dark-secondary hover:bg-gunmetal'
        maxSize={3 * 1024 ** 2}
        multiple={false}
      >
        <section className='flex flex-col justify-center items-center gap-4 p-16'>
          <PhotoIcon className='w-12 h-12' />
          <div>
            <h4 className='text-lg font-semibold text-center'>
              Drag profile photo here or click to select one
            </h4>
          </div>
        </section>
      </Dropzone>
    </section>
  );
};
export default AvatarUploader;
