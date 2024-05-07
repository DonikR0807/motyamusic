import React from 'react'
import { SongInfo } from '../../../entities/song'
import { LikeSongBtn } from '../../../features/addToFavourite'

export const SongCard = () => {
  return (
    <SongInfo>
        <LikeSongBtn></LikeSongBtn>
    </SongInfo>
  )
}
