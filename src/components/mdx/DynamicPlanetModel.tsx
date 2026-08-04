"use client";

import dynamic from 'next/dynamic';

export const DynamicPlanetModel = dynamic(() => import('@/components/mdx/PlanetModel').then(mod => mod.PlanetModel), { ssr: false });
