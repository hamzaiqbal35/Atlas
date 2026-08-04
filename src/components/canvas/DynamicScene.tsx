"use client";

import dynamic from 'next/dynamic';

export const DynamicScene = dynamic(() => import('@/components/canvas/Scene').then(mod => mod.Scene), { ssr: false });
