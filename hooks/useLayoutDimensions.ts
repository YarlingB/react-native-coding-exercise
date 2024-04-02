import { useState, useCallback } from 'react';

interface IDimesion {
  width: number;
  height: number;
}
export function useLayoutDimension() {
  const [dimension, setDimension] = useState<IDimesion | number>(0);

  const layoutDimension = { width: 0, height: 0 };
  const onLayout = useCallback(({ nativeEvent }: any) => {
    layoutDimension.width = nativeEvent.layout.width;
    layoutDimension.height = nativeEvent.layout.height;
    if (dimension !== layoutDimension.width && layoutDimension.width > 0) {
      setDimension(layoutDimension);
    }
  }, []);

  return {
    dimension,
    onLayout,
  };
}
